import React from 'react';
import TermsHeader from './TermsHeader';
import TermsFooter from './TermsFooter';
import TermsContent from './TermsContent';

function Terms() {
  return (
    <div style={{ backgroundColor: '#E8E8E8', height: '100%' }}>
      <TermsHeader />
      <TermsContent />
      <TermsFooter />
    </div>
  );
}

export default Terms;
