import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  Heading: {
    padding: '20px 0px 20px 30px',
    fontFamily: 'Exo',
    fontWeight: '700',
    fontSize: '1.625rem'
  },
  Content: {
    fontFamily: 'Exo',
    padding: '0px 30px 0px 30px',
    color: 'black',
    lineHeight: '2rem',
    textAlign: 'justify'
  }
}));
export default function PolicyContent() {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading} style={{ marginTop: '10px' }}>
            Terms and conditions
          </h3>
          <p className={classes.Content}>
            These terms and conditions ("Terms", "Agreement") are an agreement
            between Finansify OÜ ("Finansify OÜ", "us", "we" or "our") and you
            ("User", "you" or "your"). This Agreement sets forth the general
            terms and conditions of your use of the dexfin.com website and any
            of its products or services (collectively, "Website" or "Services").
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Accounts and membership</h3>
          <p className={classes.Content}>
            You must be at least 18 years of age to use this Website. By using
            this Website and by agreeing to this Agreement you warrant and
            represent that you are at least 18 years of age. If you create an
            account on the Website, you are responsible for maintaining the
            security of your account and you are fully responsible for all
            activities that occur under the account and any other actions taken
            in connection with it. We may, but have no obligation to, monitor
            and review new accounts before you may sign in and use our Services.
            Providing false contact information of any kind may result in the
            termination of your account. You must immediately notify us of any
            unauthorized uses of your account or any other breaches of security.
            We will not be liable for any acts or omissions by you, including
            any damages of any kind incurred as a result of such acts or
            omissions. We may suspend, disable, or delete your account (or any
            part thereof) if we determine that you have violated any provision
            of this Agreement or that your conduct or content would tend to
            damage our reputation and goodwill. If we delete your account for
            the foregoing reasons, you may not re-register for our Services. We
            may block your email address and Internet protocol address to
            prevent further registration.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Billing and payments</h3>
          <p className={classes.Content}>
            You shall pay all fees or charges to your account in accordance with
            the fees, charges, and billing terms in effect at the time a fee or
            charge is due and payable. If, in our judgment, your purchase
            constitutes a high-risk transaction, we will require you to provide
            us with a copy of your valid government-issued photo identification,
            and possibly a copy of a recent bank statement for the credit or
            debit card used for the purchase. We reserve the right to change
            products and product pricing at any time. We also reserve the right
            to refuse any order you place with us. We may, in our sole
            discretion, limit or cancel quantities purchased per person, per
            household or per order. These restrictions may include orders placed
            by or under the same customer account, the same credit card, and/or
            orders that use the same billing and/or shipping address. In the
            event that we make a change to or cancel an order, we may attempt to
            notify you by contacting the e-mail and/or billing address/phone
            number provided at the time the order was made.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Accuracy of information</h3>
          <p className={classes.Content}>
            Occasionally there may be information on the Website that contains
            typographical errors, inaccuracies or omissions that may relate to
            product descriptions, pricing, availability, promotions and offers.
            We reserve the right to correct any errors, inaccuracies or
            omissions, and to change or update information or cancel orders if
            any information on the Website or on any related Service is
            inaccurate at any time without prior notice (including after you
            have submitted your order). We undertake no obligation to update,
            amend or clarify information on the Website including, without
            limitation, pricing information, except as required by law. No
            specified update or refresh date applied on the Website should be
            taken to indicate that all information on the Website or on any
            related Service has been modified or updated.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Backups</h3>
          <p className={classes.Content}>
            We are not responsible for Content residing on the Website. In no
            event shall we be held liable for any loss of any Content. It is
            your sole responsibility to maintain appropriate backup of your
            Content. Notwithstanding the foregoing, on some occasions and in
            certain circumstances, with absolutely no obligation, we may be able
            to restore some or all of your data that has been deleted as of a
            certain date and time when we may have backed up data for our own
            purposes. We make no guarantee that the data you need will be
            available.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Links to other websites</h3>
          <p className={classes.Content}>
            Although this Website may link to other websites, we are not,
            directly or indirectly, implying any approval, association,
            sponsorship, endorsement, or affiliation with any linked website,
            unless specifically stated herein. Some of the links on the Website
            may be "affiliate links". This means if you click on the link and
            purchase an item, Finansify OÜ will receive an affiliate commission.
            We are not responsible for examining or evaluating, and we do not
            warrant the offerings of, any businesses or individuals or the
            content of their websites. We do not assume any responsibility or
            liability for the actions, products, services, and content of any
            other third-parties. You should carefully review the legal
            statements and other conditions of use of any website which you
            access through a link from this Website. Your linking to any other
            off-site websites is at your own risk.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Prohibited uses</h3>
          <p className={classes.Content}>
            In addition to other terms as set forth in the Agreement, you are
            prohibited from using the Website or its Content: (a) for any
            unlawful purpose; (b) to solicit others to perform or participate in
            any unlawful acts; (c) to violate any international, federal,
            provincial or state regulations, rules, laws, or local ordinances;
            (d) to infringe upon or violate our intellectual property rights or
            the intellectual property rights of others; (e) to harass, abuse,
            insult, harm, defame, slander, disparage, intimidate, or
            discriminate based on gender, sexual orientation, religion,
            ethnicity, race, age, national origin, or disability; (f) to submit
            false or misleading information; (g) to upload or transmit viruses
            or any other type of malicious code that will or may be used in any
            way that will affect the functionality or operation of the Service
            or of any related website, other websites, or the Internet; (h) to
            collect or track the personal information of others; (i) to spam,
            phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene
            or immoral purpose; or (k) to interfere with or circumvent the
            security features of the Service or any related website, other
            websites, or the Internet. We reserve the right to terminate your
            use of the Service or any related website for violating any of the
            prohibited uses.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Intellectual property rights</h3>
          <p className={classes.Content}>
            This Agreement does not transfer to you any intellectual property
            owned by Finansify OÜ or third-parties, and all rights, titles, and
            interests in and to such property will remain (as between the
            parties) solely with Finansify OÜ. All trademarks, service marks,
            graphics and logos used in connection with our Website or Services,
            are trademarks or registered trademarks of Finansify OÜ or Finansify
            OÜ licensors. Other trademarks, service marks, graphics and logos
            used in connection with our Website or Services may be the
            trademarks of other third-parties. Your use of our Website and
            Services grants you no right or license to reproduce or otherwise
            use any Finansify OÜ or third-party trademarks.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Disclaimer of warranty</h3>
          <p className={classes.Content}>
            You agree that your use of our Website or Services is solely at your
            own risk. You agree that such Service is provided on an "as is" and
            "as available" basis. We expressly disclaim all warranties of any
            kind, whether express or implied, including but not limited to the
            implied warranties of merchantability, fitness for a particular
            purpose and non-infringement. We make no warranty that the Services
            will meet your requirements, or that the Service will be
            uninterrupted, timely, secure, or error-free; nor do we make any
            warranty as to the results that may be obtained from the use of the
            Service or as to the accuracy or reliability of any information
            obtained through the Service or that defects in the Service will be
            corrected. You understand and agree that any material and/or data
            downloaded or otherwise obtained through the use of Service is done
            at your own discretion and risk and that you will be solely
            responsible for any damage to your computer system or loss of data
            that results from the download of such material and/or data. We make
            no warranty regarding any goods or services purchased or obtained
            through the Service or any transactions entered into through the
            Service. No advice or information, whether oral or written, obtained
            by you from us or through the Service shall create any warranty not
            expressly made herein.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Limitation of liability</h3>
          <p className={classes.Content}>
            To the fullest extent permitted by applicable law, in no event will
            Finansify OÜ, its affiliates, officers, directors, employees,
            agents, suppliers or licensors be liable to any person for (a): any
            indirect, incidental, special, punitive, cover or consequential
            damages (including, without limitation, damages for lost profits,
            revenue, sales, goodwill, use of content, impact on business,
            business interruption, loss of anticipated savings, loss of business
            opportunity) however caused, under any theory of liability,
            including, without limitation, contract, tort, warranty, breach of
            statutory duty, negligence or otherwise, even if Finansify OÜ has
            been advised as to the possibility of such damages or could have
            foreseen such damages. To the maximum extent permitted by applicable
            law, the aggregate liability of Finansify OÜ and its affiliates,
            officers, employees, agents, suppliers and licensors, relating to
            the services will be limited to an amount greater of one dollar or
            any amounts actually paid in cash by you to Finansify OÜ for the
            prior one month period prior to the first event or occurrence giving
            rise to such liability. The limitations and exclusions also apply if
            this remedy does not fully compensate you for any losses or fails of
            its essential purpose.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Indemnification</h3>
          <p className={classes.Content}>
            You agree to indemnify and hold Finansify OÜ and its affiliates,
            directors, officers, employees, and agents harmless from and against
            any liabilities, losses, damages or costs, including reasonable
            attorneys' fees, incurred in connection with or arising from any
            third-party allegations, claims, actions, disputes, or demands
            asserted against any of them as a result of or relating to your
            Content, your use of the Website or Services or any willful
            misconduct on your part.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Severability</h3>
          <p className={classes.Content}>
            All rights and restrictions contained in this Agreement may be
            exercised and shall be applicable and binding only to the extent
            that they do not violate any applicable laws and are intended to be
            limited to the extent necessary so that they will not render this
            Agreement illegal, invalid or unenforceable. If any provision or
            portion of any provision of this Agreement shall be held to be
            illegal, invalid or unenforceable by a court of competent
            jurisdiction, it is the intention of the parties that the remaining
            provisions or portions thereof shall constitute their agreement with
            respect to the subject matter hereof, and all such remaining
            provisions or portions thereof shall remain in full force and
            effect.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Dispute resolution</h3>
          <p className={classes.Content}>
            The formation, interpretation, and performance of this Agreement and
            any disputes arising out of it shall be governed by the substantive
            and procedural laws of Prag, Czech Republic without regard to its
            rules on conflicts or choice of law and, to the extent applicable,
            the laws of Czech Republic. The exclusive jurisdiction and venue for
            actions related to the subject matter hereof shall be the state and
            federal courts located in Prag, Czech Republic, and you hereby
            submit to the personal jurisdiction of such courts. You hereby waive
            any right to a jury trial in any proceeding arising out of or
            related to this Agreement. The United Nations Convention on
            Contracts for the International Sale of Goods does not apply to this
            Agreement.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Assignment</h3>
          <p className={classes.Content}>
            You may not assign, resell, sub-license or otherwise transfer or
            delegate any of your rights or obligations hereunder, in whole or in
            part, without our prior written consent, which consent shall be at
            our own sole discretion and without obligation; any such assignment
            or transfer shall be null and void. We are free to assign any of its
            rights or obligations hereunder, in whole or in part, to any
            third-party as part of the sale of all or substantially all of its
            assets or stock or as part of a merger.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Changes and amendments</h3>
          <p className={classes.Content}>
            We reserve the right to modify this Agreement or its policies
            relating to the Website or Services at any time, effective upon
            posting of an updated version of this Agreement on the Website. When
            we do, we will revise the updated date at the bottom of this page.
            Continued use of the Website after any such changes shall constitute
            your consent to such changes.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Acceptance of these terms</h3>
          <p className={classes.Content}>
            You acknowledge that you have read this Agreement and agree to all
            its terms and conditions. By using the Website or its Services you
            agree to be bound by this Agreement. If you do not agree to abide by
            the terms of this Agreement, you are not authorized to use or access
            the Website and its Services.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className={classes.Heading}>Contacting us</h3>
          <p className={classes.Content}>
            If you would like to contact us to understand more about this
            Agreement or wish to contact us concerning any matter relating to
            it, you may send an email to hello@dexfin.com
            <br />
            <br />
            This document was last updated on September 25, 2019
          </p>
        </Grid>
      </Grid>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
    </Grid>
  );
}
