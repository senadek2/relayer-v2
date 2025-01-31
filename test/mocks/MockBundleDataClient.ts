import { BundleDataClient } from "../../src/clients";
import { FillsToRefund } from "../../src/interfaces";

export class MockBundleDataClient extends BundleDataClient {
  private pendingBundleRefunds: FillsToRefund = {};
  private nextBundleRefunds: FillsToRefund = {};

  async getPendingRefundsFromValidBundles() {
    return [this.pendingBundleRefunds];
  }

  async getNextBundleRefunds() {
    return this.nextBundleRefunds;
  }

  setReturnedPendingBundleRefunds(refunds: FillsToRefund) {
    this.pendingBundleRefunds = refunds;
  }

  setReturnedNextBundleRefunds(refunds: FillsToRefund) {
    this.nextBundleRefunds = refunds;
  }
}
