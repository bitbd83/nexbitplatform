import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'd3-format';

import { ChartCanvas, Chart } from 'react-stockcharts';
import {
  BarSeries,
  BollingerSeries,
  CandlestickSeries,
  LineSeries
} from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateY
} from 'react-stockcharts/lib/coordinates';

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import {
  OHLCTooltip,
  BollingerBandTooltip,
  GroupTooltip
} from 'react-stockcharts/lib/tooltip';
import {
  ema,
  stochasticOscillator,
  bollingerBand
} from 'react-stockcharts/lib/indicator';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';

const bbAppearance = {
  stroke: {
    top: '#964B00',
    middle: '#FF6600',
    bottom: '#964B00'
  },
  fill: '#4682B4'
};

class CandleStickChartWithDarkTheme extends React.Component {
  render() {
    const { type, data: initialData, width, ratio } = this.props;

    const margin = { left: 70, right: 70, top: 20, bottom: 30 };

    const gridWidth = width - margin.left - margin.right;

    const showGrid = true;
    const yGrid = showGrid
      ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 }
      : {};

    const ema20 = ema()
      .id(0)
      .options({ windowSize: 20 })
      .merge((d, c) => {
        d.ema20 = c;
      })
      .accessor(d => d.ema20);

    const ema50 = ema()
      .id(2)
      .options({ windowSize: 50 })
      .merge((d, c) => {
        d.ema50 = c;
      })
      .accessor(d => d.ema50);

    const slowSTO = stochasticOscillator()
      .options({ windowSize: 14, kWindowSize: 3 })
      .merge((d, c) => {
        d.slowSTO = c;
      })
      .accessor(d => d.slowSTO);
    const fastSTO = stochasticOscillator()
      .options({ windowSize: 14, kWindowSize: 1 })
      .merge((d, c) => {
        d.fastSTO = c;
      })
      .accessor(d => d.fastSTO);
    const fullSTO = stochasticOscillator()
      .options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
      .merge((d, c) => {
        d.fullSTO = c;
      })
      .accessor(d => d.fullSTO);

    const bb = bollingerBand()
      .merge((d, c) => {
        d.bb = c;
      })
      .accessor(d => d.bb);

    const calculatedData = bb(
      ema20(ema50(slowSTO(fastSTO(fullSTO(initialData)))))
    );
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 200)]);
    const xExtents = [start, end];

    return (
      <ChartCanvas
        height={750}
        width={width}
        ratio={ratio}
        margin={margin}
        type={type}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        clamp={true}
        zooming={false}
      >
        <Chart
          id={1}
          height={450}
          yExtents={[
            d => [d.high, d.low],
            bb.accessor(),
            ema20.accessor(),
            ema50.accessor()
          ]}
          padding={{ top: 10, bottom: 20 }}
        >
          <YAxis
            axisAt="right"
            orient="right"
            ticks={15}
            inverted={true}
            {...yGrid}
          />
          <XAxis
            axisAt="bottom"
            orient="bottom"
            showTicks={false}
            outerTickSize={0}
            stroke="grey"
            opacity={0.5}
          />

          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format('.2f')}
          />

          <CandlestickSeries
            stroke={d => (d.close > d.open ? 'red' : 'green')}
            wickStroke={d => (d.close > d.open ? 'red' : 'green')}
            fill={d => (d.close > d.open ? 'red' : 'green')}
          />

          <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} />
          <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} />

          <BollingerSeries yAccessor={d => d.bb} {...bbAppearance} />
          <CurrentCoordinate
            yAccessor={ema20.accessor()}
            fill={ema20.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema50.accessor()}
            fill={ema50.stroke()}
          />

          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={d => d.close}
            fill={d => (d.close > d.open ? 'red' : 'green')}
          />

          <OHLCTooltip origin={[5, -5]} />
          <GroupTooltip
            layout="vertical"
            origin={[5, 20]}
            verticalSize={20}
            onClick={e => console.log(e)}
            options={[
              {
                yAccessor: ema20.accessor(),
                yLabel: `${ema20.type()}(${ema20.options().windowSize})`,
                valueFill: ema20.stroke(),
                withShape: true
              },
              {
                yAccessor: ema50.accessor(),
                yLabel: `${ema50.type()}(${ema50.options().windowSize})`,
                valueFill: ema50.stroke(),
                withShape: true
              }
            ]}
          />
          <BollingerBandTooltip
            origin={[0, 60]}
            yAccessor={d => d.bb}
            options={bb.options()}
          />
        </Chart>
        <Chart
          id={2}
          yExtents={d => d.volume}
          height={200}
          origin={(w, h) => [0, h - 451]}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format('.2s')}
            tickStroke="grey"
          />
          <BarSeries
            yAccessor={d => d.volume}
            fill={d => (d.close > d.open ? 'red' : 'green')}
          />
        </Chart>
      </ChartCanvas>
    );
  }
}
CandleStickChartWithDarkTheme.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

CandleStickChartWithDarkTheme.defaultProps = {
  type: 'svg'
};
CandleStickChartWithDarkTheme = fitWidth(CandleStickChartWithDarkTheme);

export default CandleStickChartWithDarkTheme;
