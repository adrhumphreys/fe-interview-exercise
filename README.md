## Recipes

This is a basic recipe site, it has a homepage which lists the recipes and then a recipe page which displays a single recipe.

## Tasks

For every change please create a pull request for just that change, pretend you're raising it as you would when you work with us.

### Fork this repo

Please fork this repo by cloning it locally or downloading it as a zip, we want to avoid having your code shared with all other candidates

### Implement a self raising flour conversion calculator

We've found our users quite often don't have self raising flour, they do however have flour and baking soda which combined can substitute self raising flour.

We'll need to make a component which has an input for the required amount of self raising flour. Based on the users input we'll convert the amount into the required amount of flour and baking soda. The ratios are:

For 100g of self raising flour we'd combine:

- 95g flour
- 5g backing soda

Designs:
figma link to some designs

We'd also like to have some tests written for this, we haven't setup a framework for running the tests. Feel free to install a framework that works best for you (for example you could pick Jest, Playwright, Cypress, etc).

### Link recipes

Some recipes ingredients are recursive, they are made from other recipes on the site. For example `bbq-chickpea-pizza` has an ingredient "Pizza base dough" with a `link` attribute which points to `pizza-base-dough`. We'd like for our users to be able to navigate from the BBQ pizza to the pizza base dough.

### Static pages

We've noticed that there is no dynamic information stored in the recipe pages, we could optimise these by switching to using [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) to statically generate the pages at build time.

### Search for a recipe

We've found some users are not able to find a recipe easily. We'd like to implement some kind of search for our users
