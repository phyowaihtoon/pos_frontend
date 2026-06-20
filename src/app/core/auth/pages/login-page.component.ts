import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  template: `
    <section class="login-scene">
      <div class="glow orb-a"></div>
      <div class="glow orb-b"></div>

      <div class="login-shell">
        <p class="kicker">POS Console</p>
        <h1>Welcome back</h1>
        <p class="subtitle">
          Sign in to continue your shift. This form is frontend-only for now.
        </p>

        <form class="login-form" (submit)="$event.preventDefault()">
          <label for="storeCode">Store code</label>
          <input id="storeCode" type="text" placeholder="YGN-01" autocomplete="organization" required />

          <label for="email">Work email</label>
          <input id="email" type="email" placeholder="cashier@shop.com" autocomplete="email" required />

          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" autocomplete="current-password" required />

          <div class="actions-row">
            <label class="remember">
              <input type="checkbox" />
              <span>Remember this counter</span>
            </label>
            <a href="#" (click)="$event.preventDefault()">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <div class="note-row">
          <span>Need quick access?</span>
          <a routerLink="/checkout">Skip sign in for demo</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .login-scene {
      position: relative;
      min-height: calc(100vh - 96px);
      display: grid;
      place-items: center;
      padding: 2rem 1rem;
      overflow: hidden;
      background:
        radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.22), transparent 45%),
        radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.22), transparent 48%),
        linear-gradient(145deg, #f7f4ec 0%, #ecf7f6 100%);
    }

    .glow {
      position: absolute;
      border-radius: 999px;
      filter: blur(24px);
      pointer-events: none;
    }

    .orb-a {
      width: 230px;
      height: 230px;
      background: rgba(245, 158, 11, 0.3);
      top: 1rem;
      right: 6%;
      animation: drift 9s ease-in-out infinite;
    }

    .orb-b {
      width: 280px;
      height: 280px;
      background: rgba(15, 118, 110, 0.27);
      bottom: -3rem;
      left: 2%;
      animation: drift 11s ease-in-out infinite reverse;
    }

    .login-shell {
      width: min(560px, 100%);
      padding: 2rem;
      border-radius: 26px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.78);
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.15);
      backdrop-filter: blur(8px);
      z-index: 1;
      animation: rise-in 500ms ease-out;
    }

    .kicker {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font: 700 0.75rem/1 'Franklin Gothic Medium', 'Trebuchet MS', sans-serif;
      color: #0f766e;
    }

    h1 {
      margin: 0.35rem 0 0;
      font: 700 2.3rem/1.08 'Palatino Linotype', 'Book Antiqua', serif;
      color: #0f172a;
    }

    .subtitle {
      margin: 0.9rem 0 1.5rem;
      font: 500 1rem/1.45 'Gill Sans', 'Trebuchet MS', sans-serif;
      color: #334155;
    }

    .login-form {
      display: grid;
      gap: 0.7rem;
    }

    label {
      font: 700 0.8rem/1 'Franklin Gothic Medium', 'Trebuchet MS', sans-serif;
      color: #1e293b;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    input[type='text'],
    input[type='email'],
    input[type='password'] {
      height: 48px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      padding: 0 0.9rem;
      outline: none;
      font: 500 0.95rem/1.2 'Gill Sans', 'Trebuchet MS', sans-serif;
      color: #0f172a;
      background: rgba(255, 255, 255, 0.92);
      transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
    }

    input:focus {
      border-color: #0f766e;
      box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.18);
      transform: translateY(-1px);
    }

    .actions-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin: 0.6rem 0;
    }

    .remember {
      text-transform: none;
      letter-spacing: normal;
      display: flex;
      align-items: center;
      gap: 0.55rem;
      font: 500 0.9rem/1.2 'Gill Sans', 'Trebuchet MS', sans-serif;
      color: #334155;
      cursor: pointer;
    }

    .remember input {
      accent-color: #0f766e;
      width: 16px;
      height: 16px;
      margin: 0;
    }

    .actions-row a,
    .note-row a {
      color: #0f766e;
      text-decoration: none;
      font: 700 0.85rem/1 'Franklin Gothic Medium', 'Trebuchet MS', sans-serif;
    }

    .actions-row a:hover,
    .note-row a:hover {
      text-decoration: underline;
    }

    button {
      margin-top: 0.25rem;
      height: 50px;
      border: 0;
      border-radius: 12px;
      cursor: pointer;
      color: #f8fafc;
      background: linear-gradient(120deg, #0f766e 0%, #0369a1 100%);
      font: 700 0.95rem/1 'Franklin Gothic Medium', 'Trebuchet MS', sans-serif;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
      box-shadow: 0 16px 34px rgba(3, 105, 161, 0.28);
    }

    button:hover {
      transform: translateY(-1px);
      filter: brightness(1.05);
      box-shadow: 0 20px 36px rgba(3, 105, 161, 0.34);
    }

    button:active {
      transform: translateY(1px);
    }

    .note-row {
      margin-top: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      color: #475569;
      font: 500 0.9rem/1.3 'Gill Sans', 'Trebuchet MS', sans-serif;
    }

    @media (max-width: 640px) {
      .login-shell {
        padding: 1.35rem;
      }

      h1 {
        font-size: 1.95rem;
      }

      .actions-row,
      .note-row {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @keyframes drift {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(10px) translateX(-8px);
      }
    }

    @keyframes rise-in {
      from {
        opacity: 0;
        transform: translateY(14px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `,
})
export class LoginPageComponent {}