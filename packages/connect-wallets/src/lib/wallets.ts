import { TalismanWallet } from './talisman-wallet';
import { PolkadotjsWallet } from './polkadotjs-wallet';
import { SubWallet } from './subwallet-wallet';
import { FearlessWallet } from './fearless-wallet';
import { Wallet } from '..';
import { EnkryptWallet } from './enkrypt-wallet';

// Export wallets as well for one and done usage
export { TalismanWallet, SubWallet, PolkadotjsWallet, EnkryptWallet, FearlessWallet };

// Add new wallets here
const supportedWallets = [
  new TalismanWallet(),
  new SubWallet(),
  new FearlessWallet(),
  new PolkadotjsWallet(),
  new EnkryptWallet()
];

export function getWallets(): Wallet[] {
  return supportedWallets;
}

export function getWalletBySource(
  source: string | unknown
): Wallet | undefined {
  return supportedWallets.find((wallet) => {
    return wallet.extensionName === source;
  });
}

export function isWalletInstalled(source: string | unknown): boolean {
  const wallet = getWalletBySource(source);
  return wallet?.installed as boolean;
}
