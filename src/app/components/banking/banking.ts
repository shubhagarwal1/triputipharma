import { Component, signal } from '@angular/core';

interface BankAccount {
  name: string;
  accountNo: string;
  ifsc: string;
  branch: string;
}

@Component({
  selector: 'app-banking',
  templateUrl: './banking.html',
  styleUrl: './banking.scss',
})
export class Banking {
  /** Registered account holder for all banking + UPI payments. */
  accountHolder = 'Triputi Pharma, Gurugram';

  accounts: BankAccount[] = [
    {
      name: 'Punjab National Bank',
      accountNo: '0188009300068870',
      ifsc: 'PUNB0018800',
      branch: 'Fountain Chowk, Gurgaon',
    },
    {
      name: 'ICICI Bank',
      accountNo: '732605000253',
      ifsc: 'ICIC0007326',
      branch: 'Sector 9, Gurgaon',
    },
  ];

  /** UPI / BHIM QR card (ICICI Pockets) — scan to pay instantly. */
  upiMerchant = 'TRIPUTI PHARMA';
  upiMobile = '9717073873';

  /** Tracks which value was just copied so the UI can flash a "Copied" hint. */
  copiedKey = signal<string | null>(null);

  copy(value: string, key: string): void {
    const onCopied = () => {
      this.copiedKey.set(key);
      setTimeout(() => {
        if (this.copiedKey() === key) {
          this.copiedKey.set(null);
        }
      }, 1800);
    };

    // Clipboard API requires a secure context (HTTPS/localhost). Over a plain-HTTP
    // LAN IP it is unavailable, so fall back to the legacy execCommand approach.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(onCopied, () => this.legacyCopy(value, onCopied));
    } else {
      this.legacyCopy(value, onCopied);
    }
  }

  private legacyCopy(value: string, onCopied: () => void): void {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      if (document.execCommand('copy')) {
        onCopied();
      }
    } catch {
      /* clipboard unavailable — silently ignore */
    }
    document.body.removeChild(textarea);
  }
}
