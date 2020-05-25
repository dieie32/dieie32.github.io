import React from "react";
import "materialize-css";
import { Collapsible, CollapsibleItem } from "react-materialize";

function Coll() {
  return (
    <div>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="How do I pay for the Essentials or Premium plan?"
          node="div"
        >
          You can pay with a credit card or via net banking (if you’re in United
          States). We will renew your subscription automatically at the end of
          every billing cycle.
        </CollapsibleItem>
        <CollapsibleItem
          expanded
          header="Can I cancel my Essentials or Premium plan subscription at any time?"
          node="div"
        >
          You can pay with a credit card or via net banking (if you’re in United
          States). We will renew your subscription automatically at the end of
          every billing cycle.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="We need to add new users to our team. How will that be billed?"
          node="div"
        >
          You can pay with a credit card or via net banking (if you’re in United
          States). We will renew your subscription automatically at the end of
          every billing cycle.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="My team wants to cancel its subscription. How do we do that? Can we
            get a refund?"
          node="div"
        >
          You can pay with a credit card or via net banking (if you’re in United
          States). We will renew your subscription automatically at the end of
          every billing cycle.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Do you offer discounts for non-profit organizations or educational
            institutions?"
          node="div"
        >
          You can pay with a credit card or via net banking (if you’re in United
          States). We will renew your subscription automatically at the end of
          every billing cycle.
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default Coll;
