# BestBets App

BestBets App uses NextJS to give you an ultra fast PWA.

It uses data from [RapidApi](https://rapidapi.com/).

Demo [here](https://best-bets.vercel.app/).

### Iphone X Screenshot

![IphoneX Screen Shot](./screenshots/iPhoneX_v1.png)
![IphoneX Screen Shot Collapsed](./screenshots/iPhoneX_v1_collapsed.png)

### How to run

Create a `.env.local` file at your route folder and set `NEXT_PUBLIC_MOCKED_DATA` to `true` if you want to run with mock data
or add a `RAPIDAPI_KEY` to run with real data. Run `yarn dev`to start the app in dev mode.

### Contributions

Contributions are welcome. Just open a PR and feel free to contact me :-).

### TODO

#### Algorithm
- Players with more goals
- Evaluate sequences on shape DWW != WDW

#### Arquitectural
- Move data to DB
- Find team by name method?, alias?...
- Dynamic load on mocks

#### Others
- Best bet on front page
- Update react import 

#### Performance
- Initial re-renders
- Image optimization with next10
<!-- Warning: You have opted-out of Automatic Static Optimization due to `getInitialProps` in `pages/_app`. This does not opt-out pages with `getStaticProps`
Read more: https://err.sh/next.js/opt-out-auto-static-optimization -->

#### UI
- Show goalsFor and goalsAgainst