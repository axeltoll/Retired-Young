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

        // form for personal details
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
              required: true,
            },
            {
              id: 'jifu_id_from_form',
              placeholder: 'Enter your Jifu ID',
              type: 'text',
              required: true,
            },
            {
              id: 'email_from_form',
              placeholder: 'Enter the Email you used to sign up for Jifu',
              type: 'text',
              required: true,
            },
            {
              id: 'phone_number_from_form',
              placeholder: 'Enter your Phone Number + country code',
              type: 'text',
              required: true,
            },
          ],
          button: 'Next Step',
          onClick: () => {
            // Custom validation logic
            const formState = inject(FORM_STATE_TOKEN, null);

            if (formState?.state.value.isValid) {
              // Proceed to the next slide if the form is valid
              return true;
            } else {
              // Display an error message to the user
              alert('Please fill in all the required fields.');
              return false;
            }
          } // <-- Correctly close the onClick method
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

        // list for MetaTrader5
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

        // Telegram Links slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: "Let's get you plugged in!",
          description: '',
          textAlign: 'center',
          list: [
            "<a href='https://t.me/+2SwpZ0gf13syODdi' target='_blank'>Retired Young - International</a>",
            "<a href='https://t.me/+11-XCqOgICthMDJl' target='_blank'>VXA Trade Ideas</a>",
            "<a href='https://t.me/+SKLL3OI1kSTLeY22' target='_blank'>Pilos Development</a>",
            "<a href='https://t.me/+7foUKc8geeRhN2Ux' target='_blank'>Killshot Gold Alerts</a>",
            "<a href='https://t.me/+5Xnn9O6bSvJjYTg5' target='_blank'>Killshot US30 Alert</a>",
            "<a href='https://t.me/+vZa4_8PyWSs0MWE5' target='_blank'>Killshot NAS Alert</a>",
          ],
          button: 'Your Onboarding is now complete!',
          onClick: 'close',
        },
      ],
    },
  ],
});