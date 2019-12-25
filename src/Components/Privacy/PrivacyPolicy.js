import React from 'react';
import PolicyHeader from './PolicyHeader';
import PolicyFooter from './PolicyFooter';
import PolicyContent from './PolicyContent';

function Policy() {
  return (
    <div style={{ backgroundColor: '#E8E8E8', height: '100%' }}>
      <PolicyHeader />
      <PolicyContent />
      <PolicyFooter />
    </div>
  );
}

export default Policy;
