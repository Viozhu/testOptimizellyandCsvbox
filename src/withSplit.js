import { withSplitFactory } from "@splitsoftware/splitio-react";

const SDK_CONFIG = {
  core: {
    authorizationKey: "8jkqgi5pctkq2tn8qq9v025ple2roc341hts",
    key: "dev",
  },
  debug: true,
};

const withSplit = withSplitFactory(SDK_CONFIG);
export default withSplit;
