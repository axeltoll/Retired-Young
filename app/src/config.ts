import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to the Retired Young Revolution!',
          description:
            "To get started with your Onboarding and get access to all of the tools you need, click <b>'Get Started'</b> below and respond to a few questions.",
          button: 'Get Started',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Personal details',
          description: "Enter your personal details below. To find your Jifu ID, <a href='https://office2.jifu.com/app.html#/ProfileSetting/Account' target='_blank'>click here</a> and log in to your account and you will find it in the personal information section.",
          form: [
            {
              id: 'full_name_from_form',
              placeholder: 'Enter your Full Name',
              type: 'text',
            },
            {
              id: 'jifu_id_from_form',
              placeholder: 'Enter your Jifu ID',
              type: 'text',
            },
            {
              id: 'email_from_form',
              placeholder: 'Enter the Email you used to sign up for Jifu',
              type: 'text',
            },
            {
              id: 'phone_number_from_form',
              placeholder: 'Enter your Phone Number + country code',
              type: 'text',
            },
          ],
          button: 'Next Step',
        },

        // list for JIFU apps
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Get connected with your educators!',
          description:
            'Install both of the apps below so you dont miss out on <b>live sessions and daily trade ideas!</b>',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: "<a href='https://apps.apple.com/au/app/jifu-connect/id6477942110' target='_blank'>JIFU Connect</a>",
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: "<a href='https://apps.apple.com/us/app/jifu-member/id6477579193' target='_blank'>JIFU Member</a>",
            },
          ],
          button: 'Next Step',
        },

        // list for JIFU apps
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Get MetaTrader5!',
          description:
            'Download the most used trading app where you can trade with demo money.',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: "<a href='https://apps.apple.com/us/app/metatrader-5/id413251709' target='_blank'>MetaTrader5</a>",
            },
          ],
          button: 'Next Step',
        },

        // "everything is customizable" slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Everything is customizable',
          description: '',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          button: 'Super-Duper Next',
        },

        // slide with other features
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Some other features:',
          description: '',
          list: [
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
            "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
