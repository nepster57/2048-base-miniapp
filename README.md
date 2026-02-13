# 2048

A small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone). 2048 was indirectly inspired by [Threes](https://asherv.com/threes/). This repo is set up as a **Base Mini App** and is configured for **Vercel** (app URL: **https://2048-base-miniapp.vercel.app**).

Made just for fun. [Play it here!](http://gabrielecirulli.github.io/2048/)

---

## Base Mini App – Deploy & Publish

### Deploy on Vercel

1. **Import on Vercel**  
   [vercel.com](https://vercel.com) → **Add New** → **Project** → import repo `nepster57/2048-base-miniapp`. Deploy. The app will be at **https://2048-base-miniapp.vercel.app** (or your custom domain). `/.well-known/farcaster.json` is served automatically.

2. **Account association** (one-time)  
   - Open [Base Build → Account association](https://www.base.dev/preview?tab=account).  
   - Enter app URL: `https://2048-base-miniapp.vercel.app`.  
   - Click **Submit**, then **Verify** and complete the steps.  
   - Copy the generated **header**, **payload**, and **signature**.

3. **Add to manifest**  
   Either paste them into `.well-known/farcaster.json` and push, or add as GitHub secrets (`FC_AA_HEADER`, `FC_AA_PAYLOAD`, `FC_AA_SIGNATURE`) and use the GitHub Actions deploy so the manifest is updated on each deploy.

4. **Preview**  
   Use the [Base Build Preview](https://www.base.dev/preview) with your app URL.

5. **Publish**  
   In the Base app, create a post with your app URL to publish the mini app.

### Alternative: GitHub Pages

Repo also has a **Deploy to GitHub Pages** workflow. In **Settings** → **Pages** set **Source** to **GitHub Actions**, then push. App URL will be `https://nepster57.github.io/2048-base-miniapp` (update URLs in `index.html` and `.well-known/farcaster.json` if you use Pages).

---

The official app can also be found on the [Play Store](https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048) and [App Store!](https://itunes.apple.com/us/app/2048-by-gabriele-cirulli/id868076805)

### Contributions

[Anna Harren](https://github.com/iirelu/) and [sigod](https://github.com/sigod) are maintainers for this repository.

Other notable contributors:

 - [TimPetricola](https://github.com/TimPetricola) added best score storage
 - [chrisprice](https://github.com/chrisprice) added custom code for swipe handling on mobile
 - [marcingajda](https://github.com/marcingajda) made swipes work on Windows Phone
 - [mgarciaisaia](https://github.com/mgarciaisaia) added support for Android 2.3

Many thanks to [rayhaanj](https://github.com/rayhaanj), [Mechazawa](https://github.com/Mechazawa), [grant](https://github.com/grant), [remram44](https://github.com/remram44) and [ghoullier](https://github.com/ghoullier) for the many other good contributions.

### Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>

That screenshot is fake, by the way. I never reached 2048 :smile:

## Contributing
Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

You can find the same information in the [contributing guide.](https://github.com/gabrielecirulli/2048/blob/master/CONTRIBUTING.md)

## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)

## Donations
I made this in my spare time, and it's hosted on GitHub (which means I don't have any hosting costs), but if you enjoyed the game and feel like buying me coffee, you can donate at my BTC address: `1Ec6onfsQmoP9kkL3zkpB6c5sA4PVcXU2i`. Thank you very much!
