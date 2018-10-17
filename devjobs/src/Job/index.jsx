import React     from 'react';
import { PanelBlock } from 'bloomer';

// id, company, company_logo, company_url, created_at, description, how_to_apply, location, title, type
const Job = ({ data }) => {
  return (
    <PanelBlock>
      <span className="panel-icon">
        {data.id}
      </span>
    </PanelBlock>
  );
};

export default Job;
