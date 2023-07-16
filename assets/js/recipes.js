const recipes  = [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_48d4982bc79611b97ad13137bc653507",
        "label": "Chia Yogurt Breakfast Bowl recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/63d/63d4eea1cf99def65fd35a47ba7ba6b8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8285783d44010a35fc6c44a24ba781f39e56f56afaea51b6aa323bf16c671bc",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63d/63d4eea1cf99def65fd35a47ba7ba6b8-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6204d610e9fc1a7752af820d035073d58a6354864a2a5d37bb1e9b76ab3dc0f9",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63d/63d4eea1cf99def65fd35a47ba7ba6b8-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fd0805963646989e88c1e689e537d348e47cf343cb5022e3ac3f6b0860257c48",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63d/63d4eea1cf99def65fd35a47ba7ba6b8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9198f8b2d8b2fbdd76eea28fa592d39582b6ffc2a0d5209f68c0653d80fd9a6b",
            "width": 300,
            "height": 300
          }
        },
        "source": "azestybite.com",
        "url": "http://www.azestybite.com/chia-yogurt-breakfast-bowl/",
        "shareAs": "http://www.edamam.com/recipe/chia-yogurt-breakfast-bowl-recipes-48d4982bc79611b97ad13137bc653507/-/4-7-ing",
        "yield": 2,
        "dietLabels": [
          "Balanced",
          "High-Fiber",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "2 6-ounce Yoplait French Vanilla yogurt cups",
          "1 tablespoon chia seeds",
          "1/3 cup raspberries",
          "1/4 cup blueberries",
          "1 kiwi, sliced",
          "3 strawberries, sliced",
          "2 tablespoons granola"
        ],
        "ingredients": [
          {
            "text": "2 6-ounce Yoplait French Vanilla yogurt cups",
            "quantity": 12,
            "measure": "ounce",
            "food": "yogurt",
            "weight": 340.1942775,
            "foodCategory": "yogurt",
            "foodId": "food_a79ojfkbgdeekgblqmky9bunr8f6",
            "image": "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg"
          },
          {
            "text": "1 tablespoon chia seeds",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chia seeds",
            "weight": 12,
            "foodCategory": "plant-based protein",
            "foodId": "food_aifjb1oaozpl1nbw7g92oa54ists",
            "image": "https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg"
          },
          {
            "text": "1/3 cup raspberries",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "raspberries",
            "weight": 41,
            "foodCategory": "fruit",
            "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
            "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
          },
          {
            "text": "1/4 cup blueberries",
            "quantity": 0.25,
            "measure": "cup",
            "food": "blueberries",
            "weight": 37,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 kiwi, sliced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "kiwi",
            "weight": 69,
            "foodCategory": "fruit",
            "foodId": "food_bqj114aab4xnl6b6j3dt0bi4sznd",
            "image": "https://www.edamam.com/food-img/dba/dbabbf58b6a43c9b65014f4c789d4409.jpg"
          },
          {
            "text": "3 strawberries, sliced",
            "quantity": 3,
            "measure": "<unit>",
            "food": "strawberries",
            "weight": 40.3,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "2 tablespoons granola",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "granola",
            "weight": 15.249999999742169,
            "foodCategory": "ready-to-eat cereals",
            "foodId": "food_b34qe9ya35sl0oawlmwdmaalkwhh",
            "image": "https://www.edamam.com/food-img/c1d/c1ddb4084dd26bd5fa47e01bb49ed6a8.jpg"
          }
        ],
        "calories": 437.8070092737392,
        "totalCO2Emissions": 8407.590846699595,
        "co2EmissionsClass": "G",
        "totalWeight": 554.7442774997421,
        "totalTime": 5,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 437.8070092737392,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 19.31436401868735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 8.191784827489792,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.020307499999940703,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.086023898046639,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 4.816268735279864,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 52.60684333136103,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 40.692593331383975,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.914249999977054,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.54372333144895,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.696401429214678,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 44.225256075000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 165.62736764993295,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 541.3230757748041,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 134.85231329956684,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1025.6776301236105,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.4645021387398156,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.577091237239249,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 541.5740636238887,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 97.09795492499742,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 104.06637138749691,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.3117383404735871,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6143268740490873,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.523283708117935,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.2694881687990461,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 74.37559942478342,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 80.25559942478341,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.25871882675,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.34019427750000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.648736566471381,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 40.52123855498633,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 460.961369922485,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 21.890350463686957,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 29.714406182595923,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 40.95892413744896,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 17.535614443787008,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 47.65699999990821,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 35.392802858429356,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 14.741752025000002,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6.901140318747207,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 54.13230757748041,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 32.107693642754015,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 21.82292830050235,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 13.691678548554531,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 32.519011247629535,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 77.36772337484125,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.788661658333048,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 115.62930154166324,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 25.978195039465593,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 47.25591338839133,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 15.770523175737095,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 20.72985913838816,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 18.593899856195854,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 52.44661778125,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2679618500000003,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.32491044314254,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 33.76769879582194,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 19.31436401868735,
            "hasRDI": true,
            "daily": 29.714406182595923,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 8.191784827489792,
                "hasRDI": true,
                "daily": 40.95892413744896,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.020307499999940703,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 5.086023898046639,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 4.816268735279864,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 52.60684333136103,
            "hasRDI": true,
            "daily": 17.535614443787008,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 40.692593331383975,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 11.914249999977054,
                "hasRDI": true,
                "daily": 47.65699999990821,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 32.54372333144895,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 17.696401429214678,
            "hasRDI": true,
            "daily": 35.392802858429356,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 44.225256075000004,
            "hasRDI": true,
            "daily": 14.741752025000002,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 165.62736764993295,
            "hasRDI": true,
            "daily": 6.901140318747207,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 541.3230757748041,
            "hasRDI": true,
            "daily": 54.13230757748041,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 134.85231329956684,
            "hasRDI": true,
            "daily": 32.107693642754015,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1025.6776301236105,
            "hasRDI": true,
            "daily": 21.82292830050235,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.4645021387398156,
            "hasRDI": true,
            "daily": 13.691678548554531,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 3.577091237239249,
            "hasRDI": true,
            "daily": 32.519011247629535,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 541.5740636238887,
            "hasRDI": true,
            "daily": 77.36772337484125,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 97.09795492499742,
            "hasRDI": true,
            "daily": 10.788661658333048,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 104.06637138749691,
            "hasRDI": true,
            "daily": 115.62930154166324,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.3117383404735871,
            "hasRDI": true,
            "daily": 25.978195039465593,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.6143268740490873,
            "hasRDI": true,
            "daily": 47.25591338839133,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.523283708117935,
            "hasRDI": true,
            "daily": 15.770523175737095,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.2694881687990461,
            "hasRDI": true,
            "daily": 20.72985913838816,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 74.37559942478342,
            "hasRDI": true,
            "daily": 18.593899856195854,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 80.25559942478341,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.25871882675,
            "hasRDI": true,
            "daily": 52.44661778125,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.34019427750000003,
            "hasRDI": true,
            "daily": 2.2679618500000003,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.648736566471381,
            "hasRDI": true,
            "daily": 24.32491044314254,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 40.52123855498633,
            "hasRDI": true,
            "daily": 33.76769879582194,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 460.961369922485,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/48d4982bc79611b97ad13137bc653507?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_07974553195eb706f2838878e5aae094",
        "label": "Farmer Boy Recipe - Hoppin' into the New Year",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/eb1/eb168fb5e51a839283c4f8038d803145.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d276b5ad060763b98690246586ad9ec8ce3a91ea7177c11ca05998880ccce2f3",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb1/eb168fb5e51a839283c4f8038d803145-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a24c7e361c5996578b4d29271de5ecaec20ce4578d207a67e8b0c2507e70e9a6",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb1/eb168fb5e51a839283c4f8038d803145-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=302cc40ae39c4b5b362a99a88c44c1b189b72e3c303bd74dc35747caed7e4609",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eb1/eb168fb5e51a839283c4f8038d803145.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d276b5ad060763b98690246586ad9ec8ce3a91ea7177c11ca05998880ccce2f3",
            "width": 300,
            "height": 300
          }
        },
        "source": "laurassweetmemories.blogspot.com",
        "url": "http://laurassweetmemories.blogspot.com/2011/12/farmer-boy-recipe-hoppin-into-new-year.html",
        "shareAs": "http://www.edamam.com/recipe/farmer-boy-recipe-hoppin-into-the-new-year-07974553195eb706f2838878e5aae094/-/4-7-ing",
        "yield": 8,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 - 2 Cups of Black-eyed Peas",
          "4 Cups of water (more as needed)",
          "1 medium onion, sliced",
          "1/2 lb. of fat back (or bacon, or pig's knuckles)",
          "1 - 2 Cups of long-grain rice",
          "Salt & pepper to taste"
        ],
        "ingredients": [
          {
            "text": "1 - 2 Cups of Black-eyed Peas",
            "quantity": 1.5,
            "measure": "cup",
            "food": "Black-eyed Peas",
            "weight": 217.5,
            "foodCategory": "vegetables",
            "foodId": "food_bg7d14ha9q9wh5a0nwmn4as6jwb2",
            "image": "https://www.edamam.com/food-img/7d0/7d0c43eab42a9e30db3bf3b53aa0203d.jpg"
          },
          {
            "text": "4 Cups of water (more as needed)",
            "quantity": 4,
            "measure": "cup",
            "food": "water",
            "weight": 946.352946,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1 medium onion, sliced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 lb. of fat back (or bacon, or pig's knuckles)",
            "quantity": 0.5,
            "measure": "pound",
            "food": "bacon",
            "weight": 226.796185,
            "foodCategory": "cured meats",
            "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
            "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
          },
          {
            "text": "1 - 2 Cups of long-grain rice",
            "quantity": 1.5,
            "measure": "cup",
            "food": "long-grain rice",
            "weight": 277.5,
            "foodCategory": "grains",
            "foodId": "food_aoretmhabmvwy5be2cqeva2lxi7k",
            "image": "https://www.edamam.com/food-img/e49/e4946f328d36095b279369b7bf47850a.jpg"
          },
          {
            "text": "Salt & pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 10.668894786,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 2143.93400705,
        "totalCO2Emissions": 3377.84399908658,
        "co2EmissionsClass": "D",
        "totalWeight": 1784.2495994896078,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course",
          "new year",
          "special occasions"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2143.93400705,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 86.84413463500002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.317769310000003,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.33339039195000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 36.716143415000005,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 13.899585256000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 273.164,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 256.81149999999997,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 16.3525,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.3157866475,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 58.483077345000005,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 149.68548210000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4135.05024115788,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 420.5124719175059,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 230.3080381948961,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1873.4983693291688,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.7254570490157075,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 8.094712272089607,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 842.7816671,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 114.12258035000002,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.5775,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.1100574706000002,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6647549098500001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.838556637000003,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.3361028521,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 408.5,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 408.5,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.1339809250000001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.9071847400000002,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3024735955000002,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.7175,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1349.4426123859794,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 107.19670035250002,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 133.6063609769231,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 146.58884655000003,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 91.05466666666666,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 65.41,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.96615469,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 49.89516070000001,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 172.293760048245,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 42.05124719175059,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 54.835247189260976,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 39.86166743253551,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 31.808094716753928,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 73.5882933826328,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 120.39738101428573,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.680286705555558,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 15.08611111111111,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 92.50478921666668,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 51.13499306538462,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 105.24097898125002,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 102.77714246923077,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 102.125,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 47.24920520833334,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 6.047898266666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.683157303333335,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.5979166666666667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 86.84413463500002,
            "hasRDI": true,
            "daily": 133.6063609769231,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 29.317769310000003,
                "hasRDI": true,
                "daily": 146.58884655000003,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.33339039195000003,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 36.716143415000005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 13.899585256000002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 273.164,
            "hasRDI": true,
            "daily": 91.05466666666666,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 256.81149999999997,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 16.3525,
                "hasRDI": true,
                "daily": 65.41,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 12.3157866475,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 58.483077345000005,
            "hasRDI": true,
            "daily": 116.96615469,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 149.68548210000003,
            "hasRDI": true,
            "daily": 49.89516070000001,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4135.05024115788,
            "hasRDI": true,
            "daily": 172.293760048245,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 420.5124719175059,
            "hasRDI": true,
            "daily": 42.05124719175059,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 230.3080381948961,
            "hasRDI": true,
            "daily": 54.835247189260976,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1873.4983693291688,
            "hasRDI": true,
            "daily": 39.86166743253551,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.7254570490157075,
            "hasRDI": true,
            "daily": 31.808094716753928,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 8.094712272089607,
            "hasRDI": true,
            "daily": 73.5882933826328,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 842.7816671,
            "hasRDI": true,
            "daily": 120.39738101428573,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 114.12258035000002,
            "hasRDI": true,
            "daily": 12.680286705555558,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 13.5775,
            "hasRDI": true,
            "daily": 15.08611111111111,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.1100574706000002,
            "hasRDI": true,
            "daily": 92.50478921666668,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.6647549098500001,
            "hasRDI": true,
            "daily": 51.13499306538462,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 16.838556637000003,
            "hasRDI": true,
            "daily": 105.24097898125002,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.3361028521,
            "hasRDI": true,
            "daily": 102.77714246923077,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 408.5,
            "hasRDI": true,
            "daily": 102.125,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 408.5,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.1339809250000001,
            "hasRDI": true,
            "daily": 47.24920520833334,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.9071847400000002,
            "hasRDI": true,
            "daily": 6.047898266666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 1.3024735955000002,
            "hasRDI": true,
            "daily": 8.683157303333335,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 0.7175,
            "hasRDI": true,
            "daily": 0.5979166666666667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1349.4426123859794,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/07974553195eb706f2838878e5aae094?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_739cb16b775c401564c732a6017c2ab0",
        "label": "Spaghetti All'aglio E Olio Con Alici",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e70/e707d1e5b1979e6bbe1bbf4cdb763d8b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1cc13b8a9b7be27ee302309f469e8155ec09a660bf4e37a3b69ba8600738aaa",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e70/e707d1e5b1979e6bbe1bbf4cdb763d8b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84bcb8d26577721d3c4e1736636d8ec3dd698177ea077528e910833362230f25",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e70/e707d1e5b1979e6bbe1bbf4cdb763d8b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c9a5d14dc0f624d7cca22fc9ae1ea0f68051f185a3e31bb374f2a6c023dfe98",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e70/e707d1e5b1979e6bbe1bbf4cdb763d8b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1cc13b8a9b7be27ee302309f469e8155ec09a660bf4e37a3b69ba8600738aaa",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e70/e707d1e5b1979e6bbe1bbf4cdb763d8b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc3d4f1c24e956f62e5f267529bf801414403a4779f519607710d12cecf8dc44",
            "width": 600,
            "height": 600
          }
        },
        "source": "Hedonia",
        "url": "http://hedonia.seantimberlake.com/hedonia/2006/12/feast_of_the_se.html",
        "shareAs": "http://www.edamam.com/recipe/spaghetti-all-aglio-e-olio-con-alici-739cb16b775c401564c732a6017c2ab0/-/4-7-ing",
        "yield": 10,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 lb Spaghetti",
          "1/2 c Olive Oil",
          "4-5 cloves Garlic - sliced thinly",
          "1 tsp Red Pepper",
          "3 filets Anchovy",
          "salt and pepper"
        ],
        "ingredients": [
          {
            "text": "1 lb Spaghetti",
            "quantity": 1,
            "measure": "pound",
            "food": "Spaghetti",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 c Olive Oil",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Olive Oil",
            "weight": 108,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "4-5 cloves Garlic - sliced thinly",
            "quantity": 4.5,
            "measure": "clove",
            "food": "Garlic",
            "weight": 13.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tsp Red Pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "Red Pepper",
            "weight": 3.104166666824113,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "3 filets Anchovy",
            "quantity": 3,
            "measure": "fillet",
            "food": "Anchovy",
            "weight": 12,
            "foodCategory": "canned seafood",
            "foodId": "food_awzkfobba3yz6ebfpan4ka2ycs5r",
            "image": "https://www.edamam.com/food-img/903/903f0e875a690dce724b7f4b6f09f931.jpg"
          },
          {
            "text": "salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 3.541179220000945,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 1.7705896100004725,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 2688.113955954475,
        "totalCO2Emissions": 1537.0981967626615,
        "co2EmissionsClass": "C",
        "totalWeight": 594.2971749521482,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2688.113955954475,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 116.14897850828649,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 16.462908518812437,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 80.08282990158457,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 14.26158895110805,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 344.4862812794098,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 329.1746787680763,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.31160251133343,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.387623052510616,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 63.689917617441616,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 10.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1376.6077128142301,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 157.22961302105745,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 255.48246481987297,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1162.291022474031,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 7.479562138426958,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.87621289870139,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 911.7891942171751,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 6.791600861613986,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 8.185333333534864,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.4481816197788856,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.33639102496480133,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.244144803222213,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8500467061655597,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 85.34054350043918,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 85.34054350043918,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.1056,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.204,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 16.528811572279828,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 70.20696349707515,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 61.94067009541254,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 134.40569779772375,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 178.6907361665946,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 82.31454259406219,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 114.82876042646994,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 61.24641004533371,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 127.37983523488323,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 3.3999999999999995,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 57.35865470059292,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 15.722961302105745,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 60.829158290445946,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 24.729596222851725,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 41.553122991260885,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 62.51102635183083,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 130.25559917388216,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0.7546223179571095,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 9.094814815038736,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 37.34846831490713,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 25.8762326896001,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 64.02590502013882,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 65.3882081665815,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 21.335135875109795,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.4,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.3599999999999999,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 110.19207714853219,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 58.50580291422929,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 116.14897850828649,
            "hasRDI": true,
            "daily": 178.6907361665946,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 16.462908518812437,
                "hasRDI": true,
                "daily": 82.31454259406219,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 80.08282990158457,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 14.26158895110805,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 344.4862812794098,
            "hasRDI": true,
            "daily": 114.82876042646994,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 329.1746787680763,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 15.31160251133343,
                "hasRDI": true,
                "daily": 61.24641004533371,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 12.387623052510616,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 63.689917617441616,
            "hasRDI": true,
            "daily": 127.37983523488323,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 10.2,
            "hasRDI": true,
            "daily": 3.3999999999999995,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1376.6077128142301,
            "hasRDI": true,
            "daily": 57.35865470059292,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 157.22961302105745,
            "hasRDI": true,
            "daily": 15.722961302105745,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 255.48246481987297,
            "hasRDI": true,
            "daily": 60.829158290445946,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1162.291022474031,
            "hasRDI": true,
            "daily": 24.729596222851725,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 7.479562138426958,
            "hasRDI": true,
            "daily": 41.553122991260885,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 6.87621289870139,
            "hasRDI": true,
            "daily": 62.51102635183083,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 911.7891942171751,
            "hasRDI": true,
            "daily": 130.25559917388216,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 6.791600861613986,
            "hasRDI": true,
            "daily": 0.7546223179571095,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 8.185333333534864,
            "hasRDI": true,
            "daily": 9.094814815038736,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.4481816197788856,
            "hasRDI": true,
            "daily": 37.34846831490713,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.33639102496480133,
            "hasRDI": true,
            "daily": 25.8762326896001,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 10.244144803222213,
            "hasRDI": true,
            "daily": 64.02590502013882,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.8500467061655597,
            "hasRDI": true,
            "daily": 65.3882081665815,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 85.34054350043918,
            "hasRDI": true,
            "daily": 21.335135875109795,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 85.34054350043918,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.1056,
            "hasRDI": true,
            "daily": 4.4,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.204,
            "hasRDI": true,
            "daily": 1.3599999999999999,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 16.528811572279828,
            "hasRDI": true,
            "daily": 110.19207714853219,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 70.20696349707515,
            "hasRDI": true,
            "daily": 58.50580291422929,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 61.94067009541254,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/739cb16b775c401564c732a6017c2ab0?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_126ec4ce27b1392dc2baca1ecc4d6da0",
        "label": "Apple Almond Dessert Pizza recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/63f/63f6a6e792de3d1bd24882d462e72cf6?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19b3b4cdf2217cb346bab04f63b02d27bf20a8ce5876005c65ff6311d6a5b8db",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63f/63f6a6e792de3d1bd24882d462e72cf6-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=366c8d59fd33b0db1ce2fce2edd53865fd19ada25dc86b73a717ff83712b9564",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63f/63f6a6e792de3d1bd24882d462e72cf6-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=799438aa6f7c2417e19b68f431f3759187f07611ff26a7e7c9981a0315e18397",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/63f/63f6a6e792de3d1bd24882d462e72cf6?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19b3b4cdf2217cb346bab04f63b02d27bf20a8ce5876005c65ff6311d6a5b8db",
            "width": 300,
            "height": 300
          }
        },
        "source": "superhealthykids.com",
        "url": "http://www.superhealthykids.com/apple-almond-dessert-pizza/",
        "shareAs": "http://www.edamam.com/recipe/apple-almond-dessert-pizza-recipes-126ec4ce27b1392dc2baca1ecc4d6da0/-/4-7-ing",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2 medium – apple",
          "1/2 cup – almond butter",
          "1/2 cup – maple syrup, pure",
          "1 tsp – almond extract",
          "1 Whole Crust – whole wheat pizza crust",
          "1/8 cup, sliced – nuts, almonds",
          "1/8 cup – cranberries, dried"
        ],
        "ingredients": [
          {
            "text": "2 medium – apple",
            "quantity": 2,
            "measure": "<unit>",
            "food": "apple",
            "weight": 364,
            "foodCategory": "fruit",
            "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
            "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
          },
          {
            "text": "1/2 cup – almond butter",
            "quantity": 0.5,
            "measure": "cup",
            "food": "almond butter",
            "weight": 125,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "1/2 cup – maple syrup, pure",
            "quantity": 0.5,
            "measure": "cup",
            "food": "maple syrup",
            "weight": 157.5,
            "foodCategory": "sugars",
            "foodId": "food_bo37p69bopqshvaul0bn4bv0kqni",
            "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
          },
          {
            "text": "1 tsp – almond extract",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "almond extract",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_akzcb47a1rd7udato049aak1z46h",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 Whole Crust – whole wheat pizza crust",
            "quantity": 1,
            "measure": "crust",
            "food": "pizza crust",
            "weight": 5,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_azb56ncbtxj17db5qbyp4av2zy8k",
            "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
          },
          {
            "text": "1/8 cup, sliced – nuts, almonds",
            "quantity": 0.125,
            "measure": "cup",
            "food": "nuts, almonds",
            "weight": 17.875,
            "foodCategory": null,
            "foodId": "food_awh1s7ba9elklxbtr7t3sazj7azv",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1/8 cup – cranberries, dried",
            "quantity": 0.125,
            "measure": "cup",
            "food": "cranberries",
            "weight": 13.75,
            "foodCategory": "fruit",
            "foodId": "food_at0yaana2e4sguapnr728bkczyk9",
            "image": "https://www.edamam.com/food-img/945/94511bef5e26f15bb6eac8e950ac79a9.jpg"
          }
        ],
        "calories": 1501.14725,
        "totalCO2Emissions": 946.7737500000001,
        "co2EmissionsClass": "C",
        "totalWeight": 687.325,
        "totalTime": 25,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course",
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1501.14725,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 79.16481999999999,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 6.008414999999999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.0035312499999999997,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 46.218849999999996,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.484270499999997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 187.7022,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 163.256825,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 24.445375000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 140.80938749999996,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 95.2875,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 31.58917,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 63.02175,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 671.13575,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 450.9165,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1812.81975,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.844877500000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.187544999999999,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 770.6832499999999,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 11.3325,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 18.669,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.28493574999999993,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.495204999999999,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.314627500000001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.31975824999999997,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 91.7725,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 90.2725,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0.9,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 35.6772,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 8.845500000000001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 381.54023750000005,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 75.0573625,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 121.79203076923075,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 30.042075,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 62.567400000000006,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 97.78150000000001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 63.17834,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.62590625,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 67.113575,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 107.36107142857144,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 38.5706329787234,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 32.471541666666674,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 65.34131818181817,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 110.09760714285714,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1.2591666666666668,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 20.743333333333336,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 23.74464583333333,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 268.861923076923,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 33.21642187500001,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 24.59678846153846,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 22.943125,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 237.84799999999998,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 7.371250000000002,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 79.16481999999999,
            "hasRDI": true,
            "daily": 121.79203076923075,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 6.008414999999999,
                "hasRDI": true,
                "daily": 30.042075,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.0035312499999999997,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 46.218849999999996,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 19.484270499999997,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 187.7022,
            "hasRDI": true,
            "daily": 62.567400000000006,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 163.256825,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 24.445375000000002,
                "hasRDI": true,
                "daily": 97.78150000000001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 140.80938749999996,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 95.2875,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 31.58917,
            "hasRDI": true,
            "daily": 63.17834,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 63.02175,
            "hasRDI": true,
            "daily": 2.62590625,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 671.13575,
            "hasRDI": true,
            "daily": 67.113575,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 450.9165,
            "hasRDI": true,
            "daily": 107.36107142857144,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1812.81975,
            "hasRDI": true,
            "daily": 38.5706329787234,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.844877500000002,
            "hasRDI": true,
            "daily": 32.471541666666674,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 7.187544999999999,
            "hasRDI": true,
            "daily": 65.34131818181817,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 770.6832499999999,
            "hasRDI": true,
            "daily": 110.09760714285714,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 11.3325,
            "hasRDI": true,
            "daily": 1.2591666666666668,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 18.669,
            "hasRDI": true,
            "daily": 20.743333333333336,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.28493574999999993,
            "hasRDI": true,
            "daily": 23.74464583333333,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 3.495204999999999,
            "hasRDI": true,
            "daily": 268.861923076923,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 5.314627500000001,
            "hasRDI": true,
            "daily": 33.21642187500001,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.31975824999999997,
            "hasRDI": true,
            "daily": 24.59678846153846,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 91.7725,
            "hasRDI": true,
            "daily": 22.943125,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 90.2725,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.9,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 35.6772,
            "hasRDI": true,
            "daily": 237.84799999999998,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 8.845500000000001,
            "hasRDI": true,
            "daily": 7.371250000000002,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 381.54023750000005,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/126ec4ce27b1392dc2baca1ecc4d6da0?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4680a4ba4558e4767421d9fc75a2815b",
        "label": "Cauliflower Casserole",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dce/dce8e62c84ee7e9d4a8fa9c8c116935c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=88b98ece3e96bf24f19e7a05028d7d879b80ae2f35975c97526a2e6c1cf071fc",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dce/dce8e62c84ee7e9d4a8fa9c8c116935c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4aa4f4ff4bd34b6615111ea0b5001a1b6fdac3f18764fc3a3b168d9f89eebddc",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dce/dce8e62c84ee7e9d4a8fa9c8c116935c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=01e6213c408a98cda675097b0f11d59a4863624edf91b865d257ef3f7fd8c7eb",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dce/dce8e62c84ee7e9d4a8fa9c8c116935c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=88b98ece3e96bf24f19e7a05028d7d879b80ae2f35975c97526a2e6c1cf071fc",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dce/dce8e62c84ee7e9d4a8fa9c8c116935c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8a0d6b4aef6feb5a767ab28f809c9852aa7a8dc49200451ac582e179ea22ea19",
            "width": 600,
            "height": 600
          }
        },
        "source": "food.com",
        "url": "http://www.food.com/recipe/cauliflower-casserole-53867",
        "shareAs": "http://www.edamam.com/recipe/cauliflower-casserole-4680a4ba4558e4767421d9fc75a2815b/-/4-7-ing",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1⁄4 cup onion",
          "6 tablespoons butter",
          "2 tablespoons flour",
          "1⁄2 cup water",
          "8 ounces Cheese Whiz",
          "2 packages frozen cauliflower, cooked",
          "3 eggs, well beaten"
        ],
        "ingredients": [
          {
            "text": "1⁄4 cup onion",
            "quantity": 0.25,
            "measure": "cup",
            "food": "onion",
            "weight": 40,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "6 tablespoons butter",
            "quantity": 6,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 85.19999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 tablespoons flour",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "flour",
            "weight": 15.624999999735829,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1⁄2 cup water",
            "quantity": 0.5,
            "measure": "cup",
            "food": "water",
            "weight": 118.29411825,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "8 ounces Cheese Whiz",
            "quantity": 8,
            "measure": "ounce",
            "food": "Cheese",
            "weight": 226.796185,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 packages frozen cauliflower, cooked",
            "quantity": 2,
            "measure": "package",
            "food": "frozen cauliflower",
            "weight": 568,
            "foodCategory": "vegetables",
            "foodId": "food_aqej56mbnhd903amowl4xb4w67dm",
            "image": "https://www.edamam.com/food-img/639/639284ee89360fbfaa9fd1a284cd524a.jpg"
          },
          {
            "text": "3 eggs, well beaten",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          }
        ],
        "calories": 1918.5376255490385,
        "totalCO2Emissions": 8387.110147799585,
        "co2EmissionsClass": "E",
        "totalWeight": 1182.9153032497359,
        "totalTime": 50,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1918.5376255490385,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 158.61495460499742,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 90.20207771499959,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.04902,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 46.08107552149977,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.963211312698908,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 50.86322643429843,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 36.69735143430557,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 14.165874999992866,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 15.964829187999287,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 82.3807013649728,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 887.58822315,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1816.4953527799948,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1842.9934870474606,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 155.1994111324419,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1542.1918505997173,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.92606715899691,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 11.150965545823153,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1535.0656417497148,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1559.15114345,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 280.14399999999995,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.448460893649683,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.0038356717998944,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.944776249146698,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.1250564820998836,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 499.6034699499313,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 499.6034699499313,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.787698035000001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.94077711,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.356367913499841,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 96.0649834399992,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 876.6365952117185,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 95.92688127745191,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 244.0230070846114,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 451.010388574998,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 16.95440881143281,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 56.663499999971464,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 164.7614027299456,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 295.86274105,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 75.68730636583311,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 184.29934870474605,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 36.952240745819495,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 32.812592565951434,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 32.922595327760604,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 101.37241405293776,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 219.2950916785307,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 173.2390159388889,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 311.27111111111105,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 37.371741137473585,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 154.14120552306878,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.40485155716686,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 86.54280631537566,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 124.90086748748283,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 157.82075145833338,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 26.271847400000002,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 35.70911942333227,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 80.054152866666,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 158.61495460499742,
            "hasRDI": true,
            "daily": 244.0230070846114,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 90.20207771499959,
                "hasRDI": true,
                "daily": 451.010388574998,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.04902,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 46.08107552149977,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 7.963211312698908,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 50.86322643429843,
            "hasRDI": true,
            "daily": 16.95440881143281,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 36.69735143430557,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 14.165874999992866,
                "hasRDI": true,
                "daily": 56.663499999971464,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 15.964829187999287,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 82.3807013649728,
            "hasRDI": true,
            "daily": 164.7614027299456,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 887.58822315,
            "hasRDI": true,
            "daily": 295.86274105,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1816.4953527799948,
            "hasRDI": true,
            "daily": 75.68730636583311,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1842.9934870474606,
            "hasRDI": true,
            "daily": 184.29934870474605,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 155.1994111324419,
            "hasRDI": true,
            "daily": 36.952240745819495,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1542.1918505997173,
            "hasRDI": true,
            "daily": 32.812592565951434,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.92606715899691,
            "hasRDI": true,
            "daily": 32.922595327760604,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 11.150965545823153,
            "hasRDI": true,
            "daily": 101.37241405293776,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1535.0656417497148,
            "hasRDI": true,
            "daily": 219.2950916785307,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1559.15114345,
            "hasRDI": true,
            "daily": 173.2390159388889,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 280.14399999999995,
            "hasRDI": true,
            "daily": 311.27111111111105,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.448460893649683,
            "hasRDI": true,
            "daily": 37.371741137473585,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.0038356717998944,
            "hasRDI": true,
            "daily": 154.14120552306878,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.944776249146698,
            "hasRDI": true,
            "daily": 18.40485155716686,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.1250564820998836,
            "hasRDI": true,
            "daily": 86.54280631537566,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 499.6034699499313,
            "hasRDI": true,
            "daily": 124.90086748748283,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 499.6034699499313,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 3.787698035000001,
            "hasRDI": true,
            "daily": 157.82075145833338,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.94077711,
            "hasRDI": true,
            "daily": 26.271847400000002,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.356367913499841,
            "hasRDI": true,
            "daily": 35.70911942333227,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 96.0649834399992,
            "hasRDI": true,
            "daily": 80.054152866666,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 876.6365952117185,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/4680a4ba4558e4767421d9fc75a2815b?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fe659f1b911826ad36b82cd9a439bab8",
        "label": "Orange Roasted Carrots",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8b4/8b4727e676ae3a8536030dcc4c84c0e0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc707778ed32d7a18557112888a7ced4a91187862def2c1fdd82aabf98806fc3",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b4/8b4727e676ae3a8536030dcc4c84c0e0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34d176bdcc8fcc18c808c3adfe3e54fa94a69d376d74f21babc71c5425ab689d",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b4/8b4727e676ae3a8536030dcc4c84c0e0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=430013e7227dcce74950ed61fd5a3c82d2d0ef7ab147b4f55ca1d28ce92cf28c",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b4/8b4727e676ae3a8536030dcc4c84c0e0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc707778ed32d7a18557112888a7ced4a91187862def2c1fdd82aabf98806fc3",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b4/8b4727e676ae3a8536030dcc4c84c0e0-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e73f04889074d36f410ccfd5f989515aeb086ae0dc217bf019d4997cdac8af29",
            "width": 600,
            "height": 600
          }
        },
        "source": "acookbookcollection.com",
        "url": "http://acookbookcollection.com/2015/11/03/orange-roasted-carrots/",
        "shareAs": "http://www.edamam.com/recipe/orange-roasted-carrots-fe659f1b911826ad36b82cd9a439bab8/-/4-7-ing",
        "yield": 2,
        "dietLabels": [],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "200g carrots, scrubbed not peeled",
          "1 tbsp olive oil",
          "The juice of half an orange, approx 60ml",
          "A few fresh sprigs of thyme",
          "3 cloves of garlic, smashed",
          "½ tsp cumin seeds (optional, but it adds a nice gentle spice)",
          "Salt and pepper"
        ],
        "ingredients": [
          {
            "text": "200g carrots, scrubbed not peeled",
            "quantity": 200,
            "measure": "gram",
            "food": "carrots",
            "weight": 200,
            "foodCategory": "vegetables",
            "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
            "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
          },
          {
            "text": "1 tbsp olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "The juice of half an orange, approx 60ml",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "orange",
            "weight": 65.5,
            "foodCategory": "fruit",
            "foodId": "food_b0bnl8oayiqhs2at63ifxbm6i3o3",
            "image": "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg"
          },
          {
            "text": "A few fresh sprigs of thyme",
            "quantity": 1,
            "measure": "sprig",
            "food": "thyme",
            "weight": 3,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "3 cloves of garlic, smashed",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "½ tsp cumin seeds (optional, but it adds a nice gentle spice)",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cumin seeds",
            "weight": 1.05,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "Salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 1.7523000000000002,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 0.8761500000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 254.7016365,
        "totalCO2Emissions": 201.02660597600004,
        "co2EmissionsClass": "B",
        "totalWeight": 294.3158012198505,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 254.7016365,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 14.41671249,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.9871934850000004,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 10.0509597485,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.719428977,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.624836,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 23.51192005,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.11291595,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 15.72348236,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 3.4929196,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 681.193903302,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 134.76536079276414,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 42.95511301219851,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 843.608967097588,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.202960014025507,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.7467658362198505,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 102.74381699999999,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1685.2535605,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 54.334849999999996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.215965242,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.17124057,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.326388110000001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.4444570965,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 59.52394550000001,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 59.52394550000001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.4331769600000004,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 36.173586,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 240.87792805243973,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 12.735081825000002,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 22.17955767692308,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.935967425000001,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 10.541612,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 32.4516638,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 6.9858392,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 28.38307930425,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 13.476536079276414,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 10.227407860047263,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 17.94912695952315,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.23866674458615,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.7887803292713675,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 14.677688142857143,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 187.25039561111112,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 60.372055555555555,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 17.9971035,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 13.17235153846154,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 14.539925687500006,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 34.18900742307692,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.880986375000003,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.8878464,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 30.144655,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 14.41671249,
            "hasRDI": true,
            "daily": 22.17955767692308,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 1.9871934850000004,
                "hasRDI": true,
                "daily": 9.935967425000001,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 10.0509597485,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 1.719428977,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 31.624836,
            "hasRDI": true,
            "daily": 10.541612,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 23.51192005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 8.11291595,
                "hasRDI": true,
                "daily": 32.4516638,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 15.72348236,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 3.4929196,
            "hasRDI": true,
            "daily": 6.9858392,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 681.193903302,
            "hasRDI": true,
            "daily": 28.38307930425,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 134.76536079276414,
            "hasRDI": true,
            "daily": 13.476536079276414,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 42.95511301219851,
            "hasRDI": true,
            "daily": 10.227407860047263,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 843.608967097588,
            "hasRDI": true,
            "daily": 17.94912695952315,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.202960014025507,
            "hasRDI": true,
            "daily": 12.23866674458615,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.7467658362198505,
            "hasRDI": true,
            "daily": 6.7887803292713675,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 102.74381699999999,
            "hasRDI": true,
            "daily": 14.677688142857143,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1685.2535605,
            "hasRDI": true,
            "daily": 187.25039561111112,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 54.334849999999996,
            "hasRDI": true,
            "daily": 60.372055555555555,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.215965242,
            "hasRDI": true,
            "daily": 17.9971035,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.17124057,
            "hasRDI": true,
            "daily": 13.17235153846154,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.326388110000001,
            "hasRDI": true,
            "daily": 14.539925687500006,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.4444570965,
            "hasRDI": true,
            "daily": 34.18900742307692,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 59.52394550000001,
            "hasRDI": true,
            "daily": 14.880986375000003,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 59.52394550000001,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.4331769600000004,
            "hasRDI": true,
            "daily": 22.8878464,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 36.173586,
            "hasRDI": true,
            "daily": 30.144655,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 240.87792805243973,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/fe659f1b911826ad36b82cd9a439bab8?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b2ecfccecf9cda392b7b20335b02391",
        "label": "Roasted Pork Shoulder With Pomegranate Sauce",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c43/c4393b01377db0e4f3d6a6c5385643e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08eb85b24dedf98849e4b5ad58f3a56101e943e269568434e14512e8b9c81c0f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c43/c4393b01377db0e4f3d6a6c5385643e5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bd204c65cad04de130ff6010030ad4efd5e5e7d7fe9e9ac633e7f444ce864d17",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c43/c4393b01377db0e4f3d6a6c5385643e5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b73ce43590b621c297a352b56e923b97ddbe8f0754c5485fe0d112005fce0695",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c43/c4393b01377db0e4f3d6a6c5385643e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08eb85b24dedf98849e4b5ad58f3a56101e943e269568434e14512e8b9c81c0f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c43/c4393b01377db0e4f3d6a6c5385643e5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5585dfa712ded31a120997c6e156b1ea876e593f6b55f12148a4344ea4c9ab55",
            "width": 600,
            "height": 600
          }
        },
        "source": "Allrecipes",
        "url": "http://allrecipes.com/Recipe/Roasted-Pork-Shoulder-with-Pomegranate-Sauce/Detail.aspx",
        "shareAs": "http://www.edamam.com/recipe/roasted-pork-shoulder-with-pomegranate-sauce-6b2ecfccecf9cda392b7b20335b02391/-/4-7-ing",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "2 tablespoons turbinado sugar",
          "2 pomegranates with the seeds removed",
          "1 (3 pound) bone-in pork shoulder roast",
          "1/4 teaspoon ground cinnamon",
          "2 teaspoons minced garlic",
          "2 tablespoons balsamic vinegar",
          "1/2 cup water"
        ],
        "ingredients": [
          {
            "text": "2 tablespoons turbinado sugar",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "turbinado sugar",
            "weight": 25.2499999995731,
            "foodCategory": "sugars",
            "foodId": "food_b05fq3aaaf0tndatwanivbp3lclj",
            "image": "https://www.edamam.com/food-img/0af/0af7c233f487fe0bf2d008dced0ca1cd.jpg"
          },
          {
            "text": "2 pomegranates with the seeds removed",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pomegranates",
            "weight": 564,
            "foodCategory": "fruit",
            "foodId": "food_b43po6ubmv934gb4dfd1kaic8fxa",
            "image": "https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg"
          },
          {
            "text": "1 (3 pound) bone-in pork shoulder roast",
            "quantity": 3,
            "measure": "pound",
            "food": "bone-in pork shoulder",
            "weight": 1360.77711,
            "foodCategory": "meats",
            "foodId": "food_a299wq8bece4vtb3ku5edb5gnjhc",
            "image": "https://www.edamam.com/food-img/f7b/f7be68b0bf0b29937281c1cf8758e4e5.jpg"
          },
          {
            "text": "1/4 teaspoon ground cinnamon",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 0.65,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "2 teaspoons minced garlic",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 5.6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 tablespoons balsamic vinegar",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "balsamic vinegar",
            "weight": 32,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
            "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
          },
          {
            "text": "1/2 cup water",
            "quantity": 0.5,
            "measure": "cup",
            "food": "water",
            "weight": 118.29411825,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 3818.410979598297,
        "totalCO2Emissions": 17485.93747995463,
        "co2EmissionsClass": "G",
        "totalWeight": 2106.571228249573,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3818.410979598297,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 251.57473980000003,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 85.59651816399999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 109.524981511,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 26.586866512,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 138.48499999957394,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 115.46224999957394,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 23.02275,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 107.1861049995765,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 25.047999999576515,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 244.01135792,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 966.1517481000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 915.2913862299873,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 292.37139004744876,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 319.9378209824914,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5509.006872199877,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.453264654998417,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 38.836841381824875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2694.9708401999965,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 27.3130422,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 68.82533977,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 10.8263834337,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.047483552500001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 53.81812831300001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.2289713427999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 282.5658555,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 282.5658555,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 10.069750614,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 23.13321087,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.989036509,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 92.79399999999998,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1456.23524953175,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 190.92054897991486,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 387.03806123076924,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 427.9825908199999,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.161666666524646,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 92.09099999999998,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 488.02271584000005,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 322.05058270000006,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 38.13714109291614,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 29.237139004744876,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 76.17567166249796,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 117.21291217446547,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 91.40702586110233,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 353.0621943802261,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 384.9958343142852,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3.0347824666666665,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 76.47259974444445,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 902.1986194750001,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 311.3448886538462,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 336.36330195625004,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 402.2285648307692,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 70.641463875,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 419.57294225,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 154.22140579999999,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 39.92691006,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 77.32833333333332,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 251.57473980000003,
            "hasRDI": true,
            "daily": 387.03806123076924,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 85.59651816399999,
                "hasRDI": true,
                "daily": 427.9825908199999,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 109.524981511,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 26.586866512,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 138.48499999957394,
            "hasRDI": true,
            "daily": 46.161666666524646,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 115.46224999957394,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 23.02275,
                "hasRDI": true,
                "daily": 92.09099999999998,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 107.1861049995765,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 25.047999999576515,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 244.01135792,
            "hasRDI": true,
            "daily": 488.02271584000005,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 966.1517481000001,
            "hasRDI": true,
            "daily": 322.05058270000006,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 915.2913862299873,
            "hasRDI": true,
            "daily": 38.13714109291614,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 292.37139004744876,
            "hasRDI": true,
            "daily": 29.237139004744876,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 319.9378209824914,
            "hasRDI": true,
            "daily": 76.17567166249796,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 5509.006872199877,
            "hasRDI": true,
            "daily": 117.21291217446547,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 16.453264654998417,
            "hasRDI": true,
            "daily": 91.40702586110233,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 38.836841381824875,
            "hasRDI": true,
            "daily": 353.0621943802261,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2694.9708401999965,
            "hasRDI": true,
            "daily": 384.9958343142852,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 27.3130422,
            "hasRDI": true,
            "daily": 3.0347824666666665,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 68.82533977,
            "hasRDI": true,
            "daily": 76.47259974444445,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 10.8263834337,
            "hasRDI": true,
            "daily": 902.1986194750001,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 4.047483552500001,
            "hasRDI": true,
            "daily": 311.3448886538462,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 53.81812831300001,
            "hasRDI": true,
            "daily": 336.36330195625004,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 5.2289713427999995,
            "hasRDI": true,
            "daily": 402.2285648307692,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 282.5658555,
            "hasRDI": true,
            "daily": 70.641463875,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 282.5658555,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 10.069750614,
            "hasRDI": true,
            "daily": 419.57294225,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 23.13321087,
            "hasRDI": true,
            "daily": 154.22140579999999,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.989036509,
            "hasRDI": true,
            "daily": 39.92691006,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 92.79399999999998,
            "hasRDI": true,
            "daily": 77.32833333333332,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1456.23524953175,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/6b2ecfccecf9cda392b7b20335b02391?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_faf0f9f306b6c33230e963a7fc070ae9",
        "label": "Pears Roasted In Red Wine",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/340/340de4e71f27419141e9eacea84adb59.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=20b90f36cf814249fea1e658f6d66efa7e1c24b5e28787d3daa941ba2c1feada",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/340de4e71f27419141e9eacea84adb59-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1612f364fa83012b8afd93d0eb64f6c80d93e38ad8ee19178faedb0ebefb625",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/340de4e71f27419141e9eacea84adb59-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=78a546afbb8c21a799a65f7b054976e0130dc099718ae8c6655679fcf0bf19d1",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/340de4e71f27419141e9eacea84adb59.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=20b90f36cf814249fea1e658f6d66efa7e1c24b5e28787d3daa941ba2c1feada",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/340de4e71f27419141e9eacea84adb59-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f55763243a820cdeaa9d1b17c186760a12ac13564e443510e5e1f0eeb5680f1d",
            "width": 600,
            "height": 600
          }
        },
        "source": "BBC Good Food",
        "url": "http://www.bbcgoodfood.com/recipes/8083/",
        "shareAs": "http://www.edamam.com/recipe/pears-roasted-in-red-wine-faf0f9f306b6c33230e963a7fc070ae9/-/4-7-ing",
        "yield": 6,
        "dietLabels": [
          "High-Fiber",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "6-8 Comice pears",
          "2 star anise",
          "50.0g cold butter",
          "250.0ml red wine",
          "100.0g light demerara sugar",
          "2 cinnamon sticks , broken in half"
        ],
        "ingredients": [
          {
            "text": "6-8 Comice pears",
            "quantity": 7,
            "measure": "<unit>",
            "food": "pears",
            "weight": 1305.1111111111113,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "2 star anise",
            "quantity": 2,
            "measure": "<unit>",
            "food": "star anise",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_beyvheuancih87bwyqk6yb4av11q",
            "image": "https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg"
          },
          {
            "text": "50.0g cold butter",
            "quantity": 50,
            "measure": "gram",
            "food": "butter",
            "weight": 50,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "250.0ml red wine",
            "quantity": 250,
            "measure": "milliliter",
            "food": "red wine",
            "weight": 248.53306685854605,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "100.0g light demerara sugar",
            "quantity": 100,
            "measure": "gram",
            "food": "demerara sugar",
            "weight": 100,
            "foodCategory": "sugars",
            "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
            "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
          },
          {
            "text": "2 cinnamon sticks , broken in half",
            "quantity": 2,
            "measure": "<unit>",
            "food": "cinnamon sticks",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          }
        ],
        "calories": 1719.9904401630977,
        "totalCO2Emissions": 2535.587006118096,
        "co2EmissionsClass": "D",
        "totalWeight": 1712.8441779696575,
        "totalTime": 0,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1719.9904401630974,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 43.07763555555556,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 25.578504444444444,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 13.200285333333333,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.8613404444444446,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 309.18480193389695,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 265.3811574894525,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 43.80364444444446,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 225.93207834785636,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 97,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 6.3288531468009825,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 107.5,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 57.652433785452956,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 310.1826453486837,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 141.10174580080331,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2054.5778837992425,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 6.125092107549312,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.035217404713076,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 250.70393871079895,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 356.4711111111111,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 57.15737777777778,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.1862839866762607,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.44710613961503826,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.9805029586520324,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5968620703315937,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 97.05510844636328,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 97.05510844636328,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.085,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.846773333333333,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 63.54142115632308,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1321.6472361659758,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 85.99952200815487,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 66.27328547008548,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 127.89252222222221,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 103.06160064463232,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 175.21457777777786,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.657706293601967,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 35.833333333333336,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.40218474106054,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 31.01826453486837,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 33.59565376209603,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 43.71442305955835,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 34.02828948638507,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.501976406482513,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 35.814848387256994,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 39.6079012345679,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.5081975308642,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 15.523665556355057,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 34.39277997038756,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.6281434915752,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 45.912466948584125,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.26377711159082,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.541666666666667,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 18.978488888888887,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.95118429693591,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 43.07763555555556,
            "hasRDI": true,
            "daily": 66.27328547008548,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 25.578504444444444,
                "hasRDI": true,
                "daily": 127.89252222222221,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 13.200285333333333,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.8613404444444446,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 309.18480193389695,
            "hasRDI": true,
            "daily": 103.06160064463232,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 265.3811574894525,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 43.80364444444446,
                "hasRDI": true,
                "daily": 175.21457777777786,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 225.93207834785636,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 97,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 6.3288531468009825,
            "hasRDI": true,
            "daily": 12.657706293601967,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 107.5,
            "hasRDI": true,
            "daily": 35.833333333333336,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 57.652433785452956,
            "hasRDI": true,
            "daily": 2.40218474106054,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 310.1826453486837,
            "hasRDI": true,
            "daily": 31.01826453486837,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 141.10174580080331,
            "hasRDI": true,
            "daily": 33.59565376209603,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2054.5778837992425,
            "hasRDI": true,
            "daily": 43.71442305955835,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 6.125092107549312,
            "hasRDI": true,
            "daily": 34.02828948638507,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 2.035217404713076,
            "hasRDI": true,
            "daily": 18.501976406482513,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 250.70393871079895,
            "hasRDI": true,
            "daily": 35.814848387256994,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 356.4711111111111,
            "hasRDI": true,
            "daily": 39.6079012345679,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 57.15737777777778,
            "hasRDI": true,
            "daily": 63.5081975308642,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.1862839866762607,
            "hasRDI": true,
            "daily": 15.523665556355057,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.44710613961503826,
            "hasRDI": true,
            "daily": 34.39277997038756,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.9805029586520324,
            "hasRDI": true,
            "daily": 18.6281434915752,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.5968620703315937,
            "hasRDI": true,
            "daily": 45.912466948584125,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 97.05510844636328,
            "hasRDI": true,
            "daily": 24.26377711159082,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 97.05510844636328,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.085,
            "hasRDI": true,
            "daily": 3.541666666666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.846773333333333,
            "hasRDI": true,
            "daily": 18.978488888888887,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 63.54142115632308,
            "hasRDI": true,
            "daily": 52.95118429693591,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1321.6472361659758,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/faf0f9f306b6c33230e963a7fc070ae9?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5ccaee2b63d29d8c6619e2aae8fae349",
        "label": "Southern-Eastern Firecracker Shrimp",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ad1/ad1fb5d94bdc294232e7638370b97fc4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5008904a319f8923746964f93e92614e1369c49e425830531257c5a9804b3bae",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad1/ad1fb5d94bdc294232e7638370b97fc4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6aa328f9a165724fe151a2d68eead536effa16ffcac77870e20e705f1b725b90",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad1/ad1fb5d94bdc294232e7638370b97fc4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=acde4972fe1b72fcd00786234d30eea4fee91d97ed027df9c3b168d55f1c6530",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad1/ad1fb5d94bdc294232e7638370b97fc4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5008904a319f8923746964f93e92614e1369c49e425830531257c5a9804b3bae",
            "width": 300,
            "height": 300
          }
        },
        "source": "Foodista",
        "url": "http://www.foodista.com/recipe/5F5YYW48/southern-eastern-firecracker-shrimp",
        "shareAs": "http://www.edamam.com/recipe/southern-eastern-firecracker-shrimp-5ccaee2b63d29d8c6619e2aae8fae349/-/4-7-ing",
        "yield": 4,
        "dietLabels": [
          "Low-Fat"
        ],
        "healthLabels": [
          "Low Potassium",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "24 mediums shrimp",
          "12 wonton wrapper",
          "5 tablespoons Foster's (or other) Seven Pepper Jelly",
          "Canola oil"
        ],
        "ingredients": [
          {
            "text": "24 mediums shrimp",
            "quantity": 24,
            "measure": "<unit>",
            "food": "shrimp",
            "weight": 76.80000000000001,
            "foodCategory": "seafood",
            "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
            "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
          },
          {
            "text": "12 wonton wrapper",
            "quantity": 12,
            "measure": "<unit>",
            "food": "wonton wrapper",
            "weight": 384,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_aciwn4ebx5qeeobklsjebb6s408x",
            "image": "https://www.edamam.com/food-img/64e/64e52edbb86d08069012c6a331738ace.jpg"
          },
          {
            "text": "5 tablespoons Foster's (or other) Seven Pepper Jelly",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "Jelly",
            "weight": 100,
            "foodCategory": "sugar syrups",
            "foodId": "food_bzsx4atbph30cebveok2ebmgwrq8",
            "image": "https://www.edamam.com/food-img/42b/42ba8bb2c0e13f6e69b3af18f0f641ae.jpg"
          },
          {
            "text": "Canola oil",
            "quantity": 0,
            "measure": null,
            "food": "Canola oil",
            "weight": 7.626879999999999,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          }
        ],
        "calories": 1539.6616192,
        "totalCO2Emissions": 3017.749627826419,
        "co2EmissionsClass": "E",
        "totalWeight": 568.42688,
        "totalTime": 0,
        "cuisineType": [
          "japanese"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1539.6616192,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 14.50136,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.725642368,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.030126176,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.69755904,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.01086528,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 291.236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 283.224,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.012,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 48.5,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 48.5,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 53.6692,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 228.09600000000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2896.6400000000003,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 311.84000000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 106.144,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 453.32,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.028239999999998,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.2916799999999995,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 479.79999999999995,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 15.36,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.9488,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.014336,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.53904,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 21.277344,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.14288,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 532.472,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 83.19200000000001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 264.96,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.64512,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.299504,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 5.437965439999999,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 199.3064,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 76.98308096,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 22.309784615384615,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 8.62821184,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 97.07866666666666,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 32.048,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 107.33840000000001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 76.03200000000001,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 120.69333333333336,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 31.184000000000005,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 25.272380952380956,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 9.645106382978723,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 83.49022222222222,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 39.01527272727272,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 68.54285714285713,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1.7066666666666668,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.276444444444445,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 167.86133333333336,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 118.3876923076923,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 132.9834,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 10.99076923076923,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 133.118,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 26.880000000000003,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 15.330026666666669,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.531637866666666,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 14.50136,
            "hasRDI": true,
            "daily": 22.309784615384615,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 1.725642368,
                "hasRDI": true,
                "daily": 8.62821184,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.030126176,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 5.69755904,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 5.01086528,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 291.236,
            "hasRDI": true,
            "daily": 97.07866666666666,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 283.224,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 8.012,
                "hasRDI": true,
                "daily": 32.048,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 48.5,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 48.5,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 53.6692,
            "hasRDI": true,
            "daily": 107.33840000000001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 228.09600000000003,
            "hasRDI": true,
            "daily": 76.03200000000001,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2896.6400000000003,
            "hasRDI": true,
            "daily": 120.69333333333336,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 311.84000000000003,
            "hasRDI": true,
            "daily": 31.184000000000005,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 106.144,
            "hasRDI": true,
            "daily": 25.272380952380956,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 453.32,
            "hasRDI": true,
            "daily": 9.645106382978723,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 15.028239999999998,
            "hasRDI": true,
            "daily": 83.49022222222222,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 4.2916799999999995,
            "hasRDI": true,
            "daily": 39.01527272727272,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 479.79999999999995,
            "hasRDI": true,
            "daily": 68.54285714285713,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 15.36,
            "hasRDI": true,
            "daily": 1.7066666666666668,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 11.9488,
            "hasRDI": true,
            "daily": 13.276444444444445,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 2.014336,
            "hasRDI": true,
            "daily": 167.86133333333336,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.53904,
            "hasRDI": true,
            "daily": 118.3876923076923,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 21.277344,
            "hasRDI": true,
            "daily": 132.9834,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.14288,
            "hasRDI": true,
            "daily": 10.99076923076923,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 532.472,
            "hasRDI": true,
            "daily": 133.118,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 83.19200000000001,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 264.96,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.64512,
            "hasRDI": true,
            "daily": 26.880000000000003,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.299504,
            "hasRDI": true,
            "daily": 15.330026666666669,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 5.437965439999999,
            "hasRDI": true,
            "daily": 4.531637866666666,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 199.3064,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/5ccaee2b63d29d8c6619e2aae8fae349?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c2b840d19c8d69c0875de89e1c9cf75d",
        "label": "Dal",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/653/65329c369a630822197c56d08267ca13.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c49f4307ad4d7bb463e1064eb1c8f82d1ed999b4cb5cd0f34b7848ac8873686f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/653/65329c369a630822197c56d08267ca13-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=90ebc94c54bce5bf30b4d096fcaa39d9ecfabc728def086707e12e6d0c476c01",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/653/65329c369a630822197c56d08267ca13-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d1415650a6f5abd1d5bfae5045b7b73e4d77f871a5014478f928bfc5b79281c",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/653/65329c369a630822197c56d08267ca13.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c49f4307ad4d7bb463e1064eb1c8f82d1ed999b4cb5cd0f34b7848ac8873686f",
            "width": 300,
            "height": 300
          }
        },
        "source": "goodfood.com.au",
        "url": "https://www.goodfood.com.au/recipes/dal-20131030-2wil3",
        "shareAs": "http://www.edamam.com/recipe/dal-c2b840d19c8d69c0875de89e1c9cf75d/-/4-7-ing",
        "yield": 6,
        "dietLabels": [
          "High-Fiber",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "310 g (11 oz/1¼ cups) red lentils",
          "30 g (1 oz) unsalted butter",
          "1 medium onion, finely chopped",
          "2 garlic cloves, crushed",
          "1 teaspoon grated fresh ginger",
          "1 teaspoon ground turmeric",
          "1 teaspoon garam masala"
        ],
        "ingredients": [
          {
            "text": "310 g (11 oz/1¼ cups) red lentils",
            "quantity": 310,
            "measure": "gram",
            "food": "lentils",
            "weight": 310,
            "foodCategory": "plant-based protein",
            "foodId": "food_bg13k5uafva4jta78xnjcaqkli85",
            "image": "https://www.edamam.com/food-img/d5a/d5aa5bc5a3142f3179f31310054a56e6.jpg"
          },
          {
            "text": "30 g (1 oz) unsalted butter",
            "quantity": 30,
            "measure": "gram",
            "food": "unsalted butter",
            "weight": 30,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 medium onion, finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "2 garlic cloves, crushed",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 teaspoon grated fresh ginger",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "fresh ginger",
            "weight": 2,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "1 teaspoon ground turmeric",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "ground turmeric",
            "weight": 3,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
            "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
          },
          {
            "text": "1 teaspoon garam masala",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "masala",
            "weight": 1.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bwlqp2wb01krjcbnzizdga6et64z",
            "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
          }
        ],
        "calories": 1375.197,
        "totalCO2Emissions": 984.2148592309999,
        "co2EmissionsClass": "C",
        "totalWeight": 462.9,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1375.197,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 28.03361,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 15.786649999999998,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.00168,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.66235,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.63784,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 212.55689999999998,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 176.2595,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.297399999999996,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 11.1653,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 78.54911000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 64.5,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 29.85300000000001,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 169.779,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 168.46500000000003,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2381.0200000000004,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 22.31614,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.581589999999998,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 931.177,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 211.91299999999998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 24.82780000000001,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.7745590000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.706977,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 8.35204,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.8917000000000002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1508.3840000000002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 1508.3840000000002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.051000000000000004,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.3798999999999992,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.546000000000003,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 134.11473999999998,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 68.75984999999999,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 43.12863076923077,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 78.93324999999999,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 70.8523,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 145.18959999999998,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 157.09822000000003,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 21.5,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1.2438750000000005,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 16.9779,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 40.110714285714295,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 50.66000000000001,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 123.97855555555556,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 96.19627272727271,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 133.0252857142857,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 23.54588888888889,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 27.586444444444457,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 231.21325000000004,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 54.38284615384615,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 52.200250000000004,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 145.51538461538462,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 377.09600000000006,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.1250000000000004,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 15.865999999999994,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 15.455000000000004,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 28.03361,
            "hasRDI": true,
            "daily": 43.12863076923077,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 15.786649999999998,
                "hasRDI": true,
                "daily": 78.93324999999999,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.00168,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 7.66235,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.63784,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 212.55689999999998,
            "hasRDI": true,
            "daily": 70.8523,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 176.2595,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 36.297399999999996,
                "hasRDI": true,
                "daily": 145.18959999999998,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 11.1653,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 78.54911000000001,
            "hasRDI": true,
            "daily": 157.09822000000003,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 64.5,
            "hasRDI": true,
            "daily": 21.5,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 29.85300000000001,
            "hasRDI": true,
            "daily": 1.2438750000000005,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 169.779,
            "hasRDI": true,
            "daily": 16.9779,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 168.46500000000003,
            "hasRDI": true,
            "daily": 40.110714285714295,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2381.0200000000004,
            "hasRDI": true,
            "daily": 50.66000000000001,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 22.31614,
            "hasRDI": true,
            "daily": 123.97855555555556,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 10.581589999999998,
            "hasRDI": true,
            "daily": 96.19627272727271,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 931.177,
            "hasRDI": true,
            "daily": 133.0252857142857,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 211.91299999999998,
            "hasRDI": true,
            "daily": 23.54588888888889,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 24.82780000000001,
            "hasRDI": true,
            "daily": 27.586444444444457,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 2.7745590000000004,
            "hasRDI": true,
            "daily": 231.21325000000004,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.706977,
            "hasRDI": true,
            "daily": 54.38284615384615,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 8.35204,
            "hasRDI": true,
            "daily": 52.200250000000004,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.8917000000000002,
            "hasRDI": true,
            "daily": 145.51538461538462,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 1508.3840000000002,
            "hasRDI": true,
            "daily": 377.09600000000006,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 1508.3840000000002,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.051000000000000004,
            "hasRDI": true,
            "daily": 2.1250000000000004,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.3798999999999992,
            "hasRDI": true,
            "daily": 15.865999999999994,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 18.546000000000003,
            "hasRDI": true,
            "daily": 15.455000000000004,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 134.11473999999998,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/c2b840d19c8d69c0875de89e1c9cf75d?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_999659d7ac22b7b4aa92c7d80457cb25",
        "label": "Nutella Baked Brie recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e32/e32b3681702e654c5ac6b5bc8513e140?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d99f7b6eaa92154989a7d49b23aded0da02b2fb88288ae61ab579f1cb4e3526e",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e32/e32b3681702e654c5ac6b5bc8513e140-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4cc4ddc29fa6434d0407c7eb7df5dd8da82c3719dbcd688cab32710ddfc2d2f3",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e32/e32b3681702e654c5ac6b5bc8513e140-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d2026a146402b319542b824ce1b8313ded581fcdebd1a98aee4b441983d2bfec",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e32/e32b3681702e654c5ac6b5bc8513e140?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d99f7b6eaa92154989a7d49b23aded0da02b2fb88288ae61ab579f1cb4e3526e",
            "width": 300,
            "height": 300
          }
        },
        "source": "basilandbubbly.com",
        "url": "http://basilandbubbly.com/2016/01/nutella-baked-brie/",
        "shareAs": "http://www.edamam.com/recipe/nutella-baked-brie-recipes-999659d7ac22b7b4aa92c7d80457cb25/-/4-7-ing",
        "yield": 1,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 Small Wheel Brie ( approx 7 ounces )",
          "1 Sheet Frozen Puff Pastry, left out on the counter to defrost for 45 minutes",
          "½ Cup Nutella",
          "2 Tablespoons Sliced Almonds ( optional )",
          "1 Egg, beaten ( for egg wash, optional )"
        ],
        "ingredients": [
          {
            "text": "1 Small Wheel Brie ( approx 7 ounces )",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Brie",
            "weight": 28.35,
            "foodCategory": "Cheese",
            "foodId": "food_a1s428jajky9n3a8klfq7bc6et3h",
            "image": "https://www.edamam.com/food-img/f53/f5340600239cf508f17b167265c6a1cf.jpg"
          },
          {
            "text": "1 Sheet Frozen Puff Pastry, left out on the counter to defrost for 45 minutes",
            "quantity": 1,
            "measure": "sheet",
            "food": "Puff Pastry",
            "weight": 25,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
            "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
          },
          {
            "text": "½ Cup Nutella",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Nutella",
            "weight": 148,
            "foodCategory": "chocolate",
            "foodId": "food_aaz5y9abcv9nupabqhgm4a7hozy6",
            "image": "https://www.edamam.com/food-img/375/37567989ef8d6f7392094111de56f62b.jpg"
          },
          {
            "text": "2 Tablespoons Sliced Almonds ( optional )",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Almonds",
            "weight": 17.87499999969778,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 Egg, beaten ( for egg wash, optional )",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Egg",
            "weight": 43,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          }
        ],
        "calories": 1195.1452499982504,
        "totalCO2Emissions": 1398.34424999987,
        "co2EmissionsClass": "F",
        "totalWeight": 262.2249999996978,
        "totalTime": 30,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1195.1452499982504,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 74.34287499984919,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 51.40004999998851,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.019021249999954668,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.8931349999045,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 4.476595999962827,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 107.92517499993473,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 97.32379999997251,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.601374999962223,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 81.16923749998685,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 79.92,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 24.93609999993593,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 188.31,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 362.490249999997,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 286.66774999918704,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 157.812499999184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 851.0657499977848,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 8.679812499988788,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.488429999990571,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 464.37674999854636,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 119.60900000000001,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.29898874999938047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.8700549999965548,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.4615149999890593,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.29082124999958603,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 98.22249999986704,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 70.47249999986703,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 16.25,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.250075,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.00175,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 12.571339999922632,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 7.61805,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 50.98428749998667,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 59.75726249991252,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 114.37365384592184,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 257.0002499999426,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 35.97505833331158,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.40549999984889,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 49.87219999987187,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 62.77,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 15.10376041666654,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 28.666774999918704,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 37.57440476171048,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 18.107781914846484,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 48.22118055549327,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 31.71299999991428,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 66.33953571407805,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 13.28988888888889,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 24.91572916661504,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 66.92730769204267,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 15.38446874993162,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 22.37086538458354,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.555624999966756,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 52.08645833333334,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 6.678333333333333,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 83.80893333281755,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.348375000000001,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 74.34287499984919,
            "hasRDI": true,
            "daily": 114.37365384592184,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 51.40004999998851,
                "hasRDI": true,
                "daily": 257.0002499999426,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.019021249999954668,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 14.8931349999045,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 4.476595999962827,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 107.92517499993473,
            "hasRDI": true,
            "daily": 35.97505833331158,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 97.32379999997251,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 10.601374999962223,
                "hasRDI": true,
                "daily": 42.40549999984889,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 81.16923749998685,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 79.92,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 24.93609999993593,
            "hasRDI": true,
            "daily": 49.87219999987187,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 188.31,
            "hasRDI": true,
            "daily": 62.77,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 362.490249999997,
            "hasRDI": true,
            "daily": 15.10376041666654,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 286.66774999918704,
            "hasRDI": true,
            "daily": 28.666774999918704,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 157.812499999184,
            "hasRDI": true,
            "daily": 37.57440476171048,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 851.0657499977848,
            "hasRDI": true,
            "daily": 18.107781914846484,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 8.679812499988788,
            "hasRDI": true,
            "daily": 48.22118055549327,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 3.488429999990571,
            "hasRDI": true,
            "daily": 31.71299999991428,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 464.37674999854636,
            "hasRDI": true,
            "daily": 66.33953571407805,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 119.60900000000001,
            "hasRDI": true,
            "daily": 13.28988888888889,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.29898874999938047,
            "hasRDI": true,
            "daily": 24.91572916661504,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.8700549999965548,
            "hasRDI": true,
            "daily": 66.92730769204267,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.4615149999890593,
            "hasRDI": true,
            "daily": 15.38446874993162,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.29082124999958603,
            "hasRDI": true,
            "daily": 22.37086538458354,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 98.22249999986704,
            "hasRDI": true,
            "daily": 24.555624999966756,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 70.47249999986703,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 16.25,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.250075,
            "hasRDI": true,
            "daily": 52.08645833333334,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 1.00175,
            "hasRDI": true,
            "daily": 6.678333333333333,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 12.571339999922632,
            "hasRDI": true,
            "daily": 83.80893333281755,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 7.61805,
            "hasRDI": true,
            "daily": 6.348375000000001,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 50.98428749998667,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/999659d7ac22b7b4aa92c7d80457cb25?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_94759cec70d721e722f70398238b471a",
        "label": "Garlic Shrimp Scampi",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fe6/fe6bf23afa3e67eff6f2cd6535a98330.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75e64702d9144ca2d5553f003bfdd33e142e267f480ef46ffac816e3f5c12bbf",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fe6/fe6bf23afa3e67eff6f2cd6535a98330-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d947dbf5794d0a8432624a29d1443c7a315c506057bd4595801a8eaf8614581b",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fe6/fe6bf23afa3e67eff6f2cd6535a98330-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf9759d14f256d866e2cbeb62b887bcfae89ff74f86a0cd8e72888f4d89ea93e",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fe6/fe6bf23afa3e67eff6f2cd6535a98330.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75e64702d9144ca2d5553f003bfdd33e142e267f480ef46ffac816e3f5c12bbf",
            "width": 300,
            "height": 300
          }
        },
        "source": "Allrecipes",
        "url": "https://www.allrecipes.com/recipe/18131/garlic-shrimp-scampi/",
        "shareAs": "http://www.edamam.com/recipe/garlic-shrimp-scampi-94759cec70d721e722f70398238b471a/-/4-7-ing",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 (8 ounce) package angel hair pasta",
          "1/2 cup butter",
          "2 cloves garlic, sliced",
          "1 1/2 pounds shrimp, peeled and deveined",
          "1/3 cup white wine",
          "3/4 cup dry bread crumbs",
          "3 tablespoons grated Parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 (8 ounce) package angel hair pasta",
            "quantity": 8,
            "measure": "ounce",
            "food": "angel hair pasta",
            "weight": 226.796185,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup butter",
            "quantity": 0.5,
            "measure": "cup",
            "food": "butter",
            "weight": 113.5,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 cloves garlic, sliced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 1/2 pounds shrimp, peeled and deveined",
            "quantity": 1.5,
            "measure": "pound",
            "food": "shrimp",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bjap0xzbf5x6s3azkpwtfb14i25u",
            "image": "https://www.edamam.com/food-img/4df/4df0fd62e878ed84b387b9e3ab48f2dc.jpg"
          },
          {
            "text": "1/3 cup white wine",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "white wine",
            "weight": 78.39999999999999,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "3/4 cup dry bread crumbs",
            "quantity": 0.75,
            "measure": "cup",
            "food": "bread crumbs",
            "weight": 81,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          },
          {
            "text": "3 tablespoons grated Parmesan cheese",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Parmesan cheese",
            "weight": 27.88242187452861,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2736.0162118481526,
        "totalCO2Emissions": 22286.246253010944,
        "co2EmissionsClass": "G",
        "totalWeight": 1213.9671618745288,
        "totalTime": 25,
        "cuisineType": [
          "chinese"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2736.0162118481526,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 110.23670949263216,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 63.736856310430234,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.0272155422,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 30.45557375861455,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.571862067466069,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 232.65902532385982,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.63054740385982,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.028477920000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 11.988868803561981,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 188.56945911008128,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1358.4106204246796,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1762.6277296694377,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1005.4744521694378,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 417.0462379247926,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2593.3571058745665,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 10.963686750371135,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.522129447049537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2262.3623051592285,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 834.0566132802743,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 1.8719999999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0198557110310662,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.612027351623435,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 9.475738508279973,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5624385866058211,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 179.984082831217,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 67.39408283121699,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 66.42,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.8110390624943433,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.13941210937264306,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.013617131623963,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 14.407397356866985,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 659.5478759973586,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 136.80081059240763,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 169.59493768097255,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 318.68428155215116,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 77.55300844128661,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 44.11391168000001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 377.1389182201626,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 452.8035401415599,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 73.44282206955991,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 100.54744521694377,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 99.2967233154268,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 55.17781076328865,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 60.909370835395194,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 132.01935860954126,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 323.1946150227469,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 92.67295703114159,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.08,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 84.98797591925552,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 47.07902704795654,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.22336567674983,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 43.26450666198624,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 44.99602070780425,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 33.79329427059764,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.9294140624842872,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 20.090780877493085,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 12.006164464055821,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 110.23670949263216,
            "hasRDI": true,
            "daily": 169.59493768097255,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 63.736856310430234,
                "hasRDI": true,
                "daily": 318.68428155215116,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.0272155422,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 30.45557375861455,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 7.571862067466069,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 232.65902532385982,
            "hasRDI": true,
            "daily": 77.55300844128661,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 221.63054740385982,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 11.028477920000002,
                "hasRDI": true,
                "daily": 44.11391168000001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 11.988868803561981,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 188.56945911008128,
            "hasRDI": true,
            "daily": 377.1389182201626,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 1358.4106204246796,
            "hasRDI": true,
            "daily": 452.8035401415599,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1762.6277296694377,
            "hasRDI": true,
            "daily": 73.44282206955991,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1005.4744521694378,
            "hasRDI": true,
            "daily": 100.54744521694377,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 417.0462379247926,
            "hasRDI": true,
            "daily": 99.2967233154268,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2593.3571058745665,
            "hasRDI": true,
            "daily": 55.17781076328865,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 10.963686750371135,
            "hasRDI": true,
            "daily": 60.909370835395194,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 14.522129447049537,
            "hasRDI": true,
            "daily": 132.01935860954126,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2262.3623051592285,
            "hasRDI": true,
            "daily": 323.1946150227469,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 834.0566132802743,
            "hasRDI": true,
            "daily": 92.67295703114159,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 1.8719999999999999,
            "hasRDI": true,
            "daily": 2.08,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.0198557110310662,
            "hasRDI": true,
            "daily": 84.98797591925552,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.612027351623435,
            "hasRDI": true,
            "daily": 47.07902704795654,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 9.475738508279973,
            "hasRDI": true,
            "daily": 59.22336567674983,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.5624385866058211,
            "hasRDI": true,
            "daily": 43.26450666198624,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 179.984082831217,
            "hasRDI": true,
            "daily": 44.99602070780425,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 67.39408283121699,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 66.42,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.8110390624943433,
            "hasRDI": true,
            "daily": 33.79329427059764,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.13941210937264306,
            "hasRDI": true,
            "daily": 0.9294140624842872,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.013617131623963,
            "hasRDI": true,
            "daily": 20.090780877493085,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 14.407397356866985,
            "hasRDI": true,
            "daily": 12.006164464055821,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 659.5478759973586,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/94759cec70d721e722f70398238b471a?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0df2b4df0ae5a8a7fd342759ac258bd5",
        "label": "Tortilla Lasagna recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b80/b804701aefdde69c3d55273de22badf3?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=45eb9f23887eec5c05da75a725adf75291b1a006ae0d33ade956ff8a9c3a14bc",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b80/b804701aefdde69c3d55273de22badf3-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=40ad793da51af497cac2d81a041ff262845fa94b5603bc5e3526ddf927d93c34",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b80/b804701aefdde69c3d55273de22badf3-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=96d197f44de56a6e13da6b51f67ec3c27f703fbb3aafed6c06f23c9203a2cc9b",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b80/b804701aefdde69c3d55273de22badf3?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=45eb9f23887eec5c05da75a725adf75291b1a006ae0d33ade956ff8a9c3a14bc",
            "width": 300,
            "height": 300
          }
        },
        "source": "blog.ashleypichea.com",
        "url": "http://blog.ashleypichea.com/tortilla-lasagna/",
        "shareAs": "http://www.edamam.com/recipe/tortilla-lasagna-recipes-0df2b4df0ae5a8a7fd342759ac258bd5/-/4-7-ing",
        "yield": 5,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Eggs",
          "Milk",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 lb browned ground beef",
          "1 can (approx. 15 oz) black beans",
          "1 packet taco seasoning",
          "8oz sour cream",
          "6 medium-sized tortillas",
          "1.5 cups shredded Mexican-blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 lb browned ground beef",
            "quantity": 1,
            "measure": "pound",
            "food": "ground beef",
            "weight": 453.59237,
            "foodCategory": "meats",
            "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
            "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
          },
          {
            "text": "1 can (approx. 15 oz) black beans",
            "quantity": 1,
            "measure": "can",
            "food": "black beans",
            "weight": 440,
            "foodCategory": "plant-based protein",
            "foodId": "food_bazzo85azdbkmsb56nu4ra5rphoe",
            "image": "https://www.edamam.com/food-img/850/8505bc3d47bbc820b69d532202f61ce1.jpg"
          },
          {
            "text": "1 packet taco seasoning",
            "quantity": 1,
            "measure": "packet",
            "food": "seasoning",
            "weight": 4.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          },
          {
            "text": "8oz sour cream",
            "quantity": 8,
            "measure": "ounce",
            "food": "sour cream",
            "weight": 226.796185,
            "foodCategory": "Dairy",
            "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
            "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
          },
          {
            "text": "6 medium-sized tortillas",
            "quantity": 6,
            "measure": "<unit>",
            "food": "tortillas",
            "weight": 144,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_bhw0b95agm97s0abfignnb8fsvb3",
            "image": "https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg"
          },
          {
            "text": "1.5 cups shredded Mexican-blend cheese",
            "quantity": 1.5,
            "measure": "cup",
            "food": "Mexican-blend cheese",
            "weight": 168,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 2974.1290661000003,
        "totalCO2Emissions": 55053.83494540001,
        "co2EmissionsClass": "G",
        "totalWeight": 1436.788555,
        "totalTime": 55,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2974.1290661000003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 194.35625389,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 85.463796331,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 7.157687598600001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 64.93418963650001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.309265727700001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 150.86946336550002,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 110.94026336550002,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 39.9292,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.092149908500001,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 158.193674554,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 615.4603318500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2062.6257815500003,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1732.2947734499999,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 409.32632140000004,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3304.1306302500006,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 21.634049307499996,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 29.165948476500002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2559.7650452,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 597.4989642,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 14.449165665000002,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0420199561,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2301860695,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 24.608077703050007,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.27600979095,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 348.87123700000006,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 348.87123700000006,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 12.249548706500002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.2935923700000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.242212532,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 61.30660543500001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 913.747328265,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 148.706453305,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 299.0096213692308,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 427.31898165499996,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 50.28982112183334,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 159.7168,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 316.387349108,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 205.15344395000002,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 85.94274089791668,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 173.229477345,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 97.45864795238096,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 70.30065170744682,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 120.18916281944442,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 265.14498615,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 365.68072074285715,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.38877380000001,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.05462851666667,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 86.83499634166668,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 171.5527745769231,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 153.80048564406255,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 175.07767622692305,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 87.21780925000002,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 510.39786277083346,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.623949133333335,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 34.948083546666666,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 51.08883786250001,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 194.35625389,
            "hasRDI": true,
            "daily": 299.0096213692308,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 85.463796331,
                "hasRDI": true,
                "daily": 427.31898165499996,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 7.157687598600001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 64.93418963650001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 8.309265727700001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 150.86946336550002,
            "hasRDI": true,
            "daily": 50.28982112183334,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 110.94026336550002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 39.9292,
                "hasRDI": true,
                "daily": 159.7168,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 10.092149908500001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 158.193674554,
            "hasRDI": true,
            "daily": 316.387349108,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 615.4603318500001,
            "hasRDI": true,
            "daily": 205.15344395000002,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2062.6257815500003,
            "hasRDI": true,
            "daily": 85.94274089791668,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1732.2947734499999,
            "hasRDI": true,
            "daily": 173.229477345,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 409.32632140000004,
            "hasRDI": true,
            "daily": 97.45864795238096,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3304.1306302500006,
            "hasRDI": true,
            "daily": 70.30065170744682,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 21.634049307499996,
            "hasRDI": true,
            "daily": 120.18916281944442,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 29.165948476500002,
            "hasRDI": true,
            "daily": 265.14498615,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2559.7650452,
            "hasRDI": true,
            "daily": 365.68072074285715,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 597.4989642,
            "hasRDI": true,
            "daily": 66.38877380000001,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 14.449165665000002,
            "hasRDI": true,
            "daily": 16.05462851666667,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.0420199561,
            "hasRDI": true,
            "daily": 86.83499634166668,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.2301860695,
            "hasRDI": true,
            "daily": 171.5527745769231,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 24.608077703050007,
            "hasRDI": true,
            "daily": 153.80048564406255,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.27600979095,
            "hasRDI": true,
            "daily": 175.07767622692305,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 348.87123700000006,
            "hasRDI": true,
            "daily": 87.21780925000002,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 348.87123700000006,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 12.249548706500002,
            "hasRDI": true,
            "daily": 510.39786277083346,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 1.2935923700000003,
            "hasRDI": true,
            "daily": 8.623949133333335,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.242212532,
            "hasRDI": true,
            "daily": 34.948083546666666,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 61.30660543500001,
            "hasRDI": true,
            "daily": 51.08883786250001,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 913.747328265,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/0df2b4df0ae5a8a7fd342759ac258bd5?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6854c4d72449e8f76924d9c17f8e6cd0",
        "label": "Buffet Style Green Beans",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09.gif?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6be2bc1d80843654db765c388afc35232585035e8e10bbe83284f1139478c623",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09-s.gif?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d5dfaa378add77e87f10eb0d5c2d125249eaadd94d2c217ad27e9870ef75889",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09-m.gif?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=026f60f3f2c22e021ff4fb0c90a92d5fbab814fc76a30944a4560ddd48896a5a",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09.gif?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6be2bc1d80843654db765c388afc35232585035e8e10bbe83284f1139478c623",
            "width": 300,
            "height": 300
          }
        },
        "source": "tastykitchen.com",
        "url": "https://tastykitchen.com/recipes/sidedishes/buffet-style-green-beans/",
        "shareAs": "http://www.edamam.com/recipe/buffet-style-green-beans-6854c4d72449e8f76924d9c17f8e6cd0/-/4-7-ing",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Kidney-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "4 cans Cut Green Beans",
          "1 whole Onion",
          "8 slices Uncooked Bacon",
          "3 Tablespoons Vinegar",
          "½ cups Sugar"
        ],
        "ingredients": [
          {
            "text": "4 cans Cut Green Beans",
            "quantity": 4,
            "measure": "can",
            "food": "Green Beans",
            "weight": 1048,
            "foodCategory": "vegetables",
            "foodId": "food_aceucvpau4a8v6atkx5eabxyoqdn",
            "image": "https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg"
          },
          {
            "text": "1 whole Onion",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Onion",
            "weight": 125,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "8 slices Uncooked Bacon",
            "quantity": 8,
            "measure": "slice",
            "food": "Bacon",
            "weight": 224,
            "foodCategory": "cured meats",
            "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
            "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
          },
          {
            "text": "3 Tablespoons Vinegar",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Vinegar",
            "weight": 44.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_am3vwadag9arxtadrwyfcau2w3b2",
            "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
          },
          {
            "text": "½ cups Sugar",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Sugar",
            "weight": 100,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          }
        ],
        "calories": 1650.246,
        "totalCO2Emissions": 3874.1441481176,
        "co2EmissionsClass": "D",
        "totalWeight": 1541.7,
        "totalTime": 70,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner",
          "brunch"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1650.246,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 85.53460000000001,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 28.8005,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.32928,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.73705,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 14.107890000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 184.73848,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 154.31748000000002,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.421000000000003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 140.06668,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 99.8,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 51.2414,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 147.84,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1752.0140000000006,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 433.63200000000006,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 304.067,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2846.914,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.971510000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 5.29577,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 808.1180000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.43999999999994,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 137.106,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5351000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.32411,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.84212,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.2235199999999997,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 369.59000000000003,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 369.59000000000003,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.12,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.8960000000000001,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.285,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 451.1400000000001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1204.7226,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 82.5123,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 131.5916923076923,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 144.0025,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 61.57949333333334,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 121.68400000000001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 102.48279999999998,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 49.28,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 73.00058333333335,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 43.363200000000006,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 72.39690476190476,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 60.572638297872345,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 66.5083888888889,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 48.14336363636364,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 115.4454285714286,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 43.493333333333325,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 152.33999999999997,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 127.92500000000004,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 101.85461538461539,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 105.26325000000001,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 171.03999999999996,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 92.3975,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 46.66666666666667,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.973333333333334,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 35.233333333333334,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 375.95000000000005,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 85.53460000000001,
            "hasRDI": true,
            "daily": 131.5916923076923,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 28.8005,
                "hasRDI": true,
                "daily": 144.0025,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.32928,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 35.73705,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 14.107890000000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 184.73848,
            "hasRDI": true,
            "daily": 61.57949333333334,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 154.31748000000002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 30.421000000000003,
                "hasRDI": true,
                "daily": 121.68400000000001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 140.06668,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 99.8,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 51.2414,
            "hasRDI": true,
            "daily": 102.48279999999998,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 147.84,
            "hasRDI": true,
            "daily": 49.28,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1752.0140000000006,
            "hasRDI": true,
            "daily": 73.00058333333335,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 433.63200000000006,
            "hasRDI": true,
            "daily": 43.363200000000006,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 304.067,
            "hasRDI": true,
            "daily": 72.39690476190476,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2846.914,
            "hasRDI": true,
            "daily": 60.572638297872345,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 11.971510000000002,
            "hasRDI": true,
            "daily": 66.5083888888889,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 5.29577,
            "hasRDI": true,
            "daily": 48.14336363636364,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 808.1180000000002,
            "hasRDI": true,
            "daily": 115.4454285714286,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 391.43999999999994,
            "hasRDI": true,
            "daily": 43.493333333333325,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 137.106,
            "hasRDI": true,
            "daily": 152.33999999999997,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.5351000000000004,
            "hasRDI": true,
            "daily": 127.92500000000004,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.32411,
            "hasRDI": true,
            "daily": 101.85461538461539,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 16.84212,
            "hasRDI": true,
            "daily": 105.26325000000001,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.2235199999999997,
            "hasRDI": true,
            "daily": 171.03999999999996,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 369.59000000000003,
            "hasRDI": true,
            "daily": 92.3975,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 369.59000000000003,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.12,
            "hasRDI": true,
            "daily": 46.66666666666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.8960000000000001,
            "hasRDI": true,
            "daily": 5.973333333333334,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.285,
            "hasRDI": true,
            "daily": 35.233333333333334,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 451.1400000000001,
            "hasRDI": true,
            "daily": 375.95000000000005,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1204.7226,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/6854c4d72449e8f76924d9c17f8e6cd0?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_430812bc560bb3cd2b361529db698064",
        "label": "Smoked Gouda, Apple and Bacon Quesadillas recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/95a/95a53d3609c099cbe4638fcb0bdcd438?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=28730940d612093684730c6a1cb88911658b046991b6a9eaada9802863a9a53f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/95a/95a53d3609c099cbe4638fcb0bdcd438-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=980ffc9ad5b256762ec196e1b4ff24e861d69f8bb73a74598c652924051d7843",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/95a/95a53d3609c099cbe4638fcb0bdcd438-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=da291738366d02bea40672378424b469858d2bbf8e95f1d6a0070540237d27ff",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/95a/95a53d3609c099cbe4638fcb0bdcd438?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=28730940d612093684730c6a1cb88911658b046991b6a9eaada9802863a9a53f",
            "width": 300,
            "height": 300
          }
        },
        "source": "reneeskitchenadventures.com",
        "url": "http://www.reneeskitchenadventures.com/2015/09/smoked-gouda-apple-and-bacon-quesadillas.html",
        "shareAs": "http://www.edamam.com/recipe/smoked-gouda-apple-and-bacon-quesadillas-recipes-430812bc560bb3cd2b361529db698064/-/4-7-ing",
        "yield": 2,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2 - 8\" flour tortillas",
          "2 ounces shredded, Smoked Gouda cheese",
          "6 thin slices of your favorite apple (I used Honeycrisp)",
          "3 slices of cooked bacon",
          "cooking spray"
        ],
        "ingredients": [
          {
            "text": "2 - 8\" flour tortillas",
            "quantity": 2,
            "measure": "<unit>",
            "food": "flour tortillas",
            "weight": 98,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_a9ql6pdb639bs5b2nlvbob3w0mlj",
            "image": "https://www.edamam.com/food-img/357/357e415685787e6d6844e8d08c1b1586.jpg"
          },
          {
            "text": "2 ounces shredded, Smoked Gouda cheese",
            "quantity": 2,
            "measure": "ounce",
            "food": "Gouda cheese",
            "weight": 56.69904625,
            "foodCategory": "Cheese",
            "foodId": "food_b3d0469bf9qszna0z80yfbwhnak3",
            "image": "https://www.edamam.com/food-img/7d7/7d700e635219e5185a13c91d8bd02eb1.jpg"
          },
          {
            "text": "6 thin slices of your favorite apple (I used Honeycrisp)",
            "quantity": 6,
            "measure": "<unit>",
            "food": "apple",
            "weight": 1092,
            "foodCategory": "fruit",
            "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
            "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
          },
          {
            "text": "3 slices of cooked bacon",
            "quantity": 3,
            "measure": "slice",
            "food": "cooked bacon",
            "weight": 24.299999999999997,
            "foodCategory": "cured meats",
            "foodId": "food_ae0k103anpej5sa5pcxhsbzr19d4",
            "image": "https://www.edamam.com/food-img/cc4/cc48c3a5a3d02a24ad9431509b6c2480.jpg"
          },
          {
            "text": "cooking spray",
            "quantity": 0,
            "measure": null,
            "food": "cooking spray",
            "weight": 17.285587029,
            "foodCategory": "Oils",
            "foodId": "food_aglc0hqae3alv1biazc6qaiamw2x",
            "image": null
          }
        ],
        "calories": 1330.81445391968,
        "totalCO2Emissions": 2482.11564648275,
        "co2EmissionsClass": "F",
        "totalWeight": 1288.284633279,
        "totalTime": 10,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "brunch"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1330.81445391968,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 48.945995664323,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 15.798728608855802,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.01372,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 21.444138424816998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.037527467271499,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 204.17488534175297,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.61488534175297,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.56,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 117.43351882675,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 33.5271050425254,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 90.637912725,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1744.8136851346103,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 624.58332375,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 98.91272341249999,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1498.3628459625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.062147711,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.02314280375,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 761.394792525,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 128.98642631250002,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 50.232,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.764473713875,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.655807814475,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.7114403991375,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.595606237,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 229.3927997125,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 63.772799712499996,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 98,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.1550453122500002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28349523125000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.0222377110000003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 29.46837806375,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 993.0906183394819,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 66.540722695984,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 75.30153179126616,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 78.99364304427901,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 68.05829511391765,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 114.24,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 67.0542100850508,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 30.212637575000002,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 72.7005702139421,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 62.458332375,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 23.550648431547614,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 31.88006055239362,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 28.123042838888885,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 36.574025488636366,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 108.77068464642856,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 14.331825145833335,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 55.81333333333333,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 63.70614282291667,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 50.44675495961538,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 48.19650249460937,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 45.81586438461538,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 57.348199928125,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 48.12688801041668,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8899682083333336,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 20.148251406666667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 24.556981719791665,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 48.945995664323,
            "hasRDI": true,
            "daily": 75.30153179126616,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 15.798728608855802,
                "hasRDI": true,
                "daily": 78.99364304427901,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.01372,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 21.444138424816998,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 8.037527467271499,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 204.17488534175297,
            "hasRDI": true,
            "daily": 68.05829511391765,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 175.61488534175297,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 28.56,
                "hasRDI": true,
                "daily": 114.24,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 117.43351882675,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 33.5271050425254,
            "hasRDI": true,
            "daily": 67.0542100850508,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 90.637912725,
            "hasRDI": true,
            "daily": 30.212637575000002,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1744.8136851346103,
            "hasRDI": true,
            "daily": 72.7005702139421,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 624.58332375,
            "hasRDI": true,
            "daily": 62.458332375,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 98.91272341249999,
            "hasRDI": true,
            "daily": 23.550648431547614,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1498.3628459625002,
            "hasRDI": true,
            "daily": 31.88006055239362,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.062147711,
            "hasRDI": true,
            "daily": 28.123042838888885,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 4.02314280375,
            "hasRDI": true,
            "daily": 36.574025488636366,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 761.394792525,
            "hasRDI": true,
            "daily": 108.77068464642856,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 128.98642631250002,
            "hasRDI": true,
            "daily": 14.331825145833335,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 50.232,
            "hasRDI": true,
            "daily": 55.81333333333333,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.764473713875,
            "hasRDI": true,
            "daily": 63.70614282291667,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.655807814475,
            "hasRDI": true,
            "daily": 50.44675495961538,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 7.7114403991375,
            "hasRDI": true,
            "daily": 48.19650249460937,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.595606237,
            "hasRDI": true,
            "daily": 45.81586438461538,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 229.3927997125,
            "hasRDI": true,
            "daily": 57.348199928125,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 63.772799712499996,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 98,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.1550453122500002,
            "hasRDI": true,
            "daily": 48.12688801041668,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.28349523125000003,
            "hasRDI": true,
            "daily": 1.8899682083333336,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.0222377110000003,
            "hasRDI": true,
            "daily": 20.148251406666667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 29.46837806375,
            "hasRDI": true,
            "daily": 24.556981719791665,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 993.0906183394819,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/430812bc560bb3cd2b361529db698064?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1e36671c98fa1ede67699bc4a26222ea",
        "label": "Japanese-style Simmered Bean Sprouts, Tofu",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/59e/59ec505860f530c1302ff7db957d4c6a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f77da1555076a4e645241029ff8778ec9186ca24c1d7b5f1219a77d5a33ea46c",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/59e/59ec505860f530c1302ff7db957d4c6a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d53bd9b0506d15e738d85747d0917a305f7e91d9bea52b384ba580afb44fd2b4",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/59e/59ec505860f530c1302ff7db957d4c6a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab96d03e00bade040b058c17b2b3c5c203ebe6394a6348f1fa752f6fa490b3ea",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/59e/59ec505860f530c1302ff7db957d4c6a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f77da1555076a4e645241029ff8778ec9186ca24c1d7b5f1219a77d5a33ea46c",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/59e/59ec505860f530c1302ff7db957d4c6a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3dcea5a0a74c4431aa5f0260d8a372f6d144dd1042038fdd3ef11b77a6170cdc",
            "width": 600,
            "height": 600
          }
        },
        "source": "casaveneracion.com",
        "url": "http://casaveneracion.com/japanese-style-simmered-bean-sprouts-tofu-and-kombu/",
        "shareAs": "http://www.edamam.com/recipe/japanese-style-simmered-bean-sprouts-tofu-1e36671c98fa1ede67699bc4a26222ea/-/4-7-ing",
        "yield": 2,
        "dietLabels": [],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "* 1/4 cup light soy sauce",
          "* 1/4 cup rice wine (sake or mirin)",
          "* dash rice wine vinegar",
          "* 1 tablespoon lemon juice or lime juice",
          "* 100 gram firm tofu fried and diced",
          "* small handful kombu soaked in hot water until doubled",
          "* 200 gram mung bean sprout"
        ],
        "ingredients": [
          {
            "text": "* 1/4 cup light soy sauce",
            "quantity": 0.25,
            "measure": "cup",
            "food": "light soy sauce",
            "weight": 63.75,
            "foodCategory": "plant-based protein",
            "foodId": "food_af8xwhdbq4vg0tbqfqjysafu339b",
            "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
          },
          {
            "text": "* 1/4 cup rice wine (sake or mirin)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "rice wine",
            "weight": 58.2,
            "foodCategory": "cocktails and liquors",
            "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
            "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
          },
          {
            "text": "* dash rice wine vinegar",
            "quantity": 1,
            "measure": "dash",
            "food": "rice wine vinegar",
            "weight": 0.6197916664466113,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_axlcd4tack2d20bveizm4ayu0h2w",
            "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
          },
          {
            "text": "* 1 tablespoon lemon juice or lime juice",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "lemon juice",
            "weight": 15.2499999997422,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "* 100 gram firm tofu fried and diced",
            "quantity": 100,
            "measure": "gram",
            "food": "firm tofu",
            "weight": 100,
            "foodCategory": "plant-based protein",
            "foodId": "food_bu9fz3paqr6xcebft7onna22v8ve",
            "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
          },
          {
            "text": "* small handful kombu soaked in hot water until doubled",
            "quantity": 1,
            "measure": "handful",
            "food": "kombu",
            "weight": 7.500000000126803,
            "foodCategory": "vegetables",
            "foodId": "food_bkm6u47a2jvv4va6cnq8qb5hvit4",
            "image": "https://www.edamam.com/food-img/5a0/5a0e507a39fb6baf7cacef4e02e25d62.jpg"
          },
          {
            "text": "* 200 gram mung bean sprout",
            "quantity": 200,
            "measure": "gram",
            "food": "mung bean sprout",
            "weight": 200,
            "foodCategory": "vegetables",
            "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
            "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
          }
        ],
        "calories": 325.01706249995823,
        "totalCO2Emissions": 758.4148364426271,
        "co2EmissionsClass": "D",
        "totalWeight": 445.3197916663156,
        "totalTime": 0,
        "cuisineType": [
          "asian",
          "japanese"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 325.01706249995823,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 9.349850000000092,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.3989375000002102,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 1.9990400000001087,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.130702500000004,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 22.903872916660927,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 16.41437291666005,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 6.489500000000875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 9.008297916660842,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 29.619750000001225,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2339.8038958336224,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 744.5871875001844,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 157.47569791680243,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 796.3448958331762,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.624960937503342,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.0052019791680755,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 411.7117916666905,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2.4500000000076083,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 32.72674999990404,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.3589100000000015,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.5165375000001515,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.654877500000361,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.37716499999988395,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 195.6000000001767,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 195.6000000001767,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.5495000000007164,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 70.95000000008369,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 364.8883624996569,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 16.25085312499791,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 14.384384615384757,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 6.994687500001051,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 7.634624305553642,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.958000000003505,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 59.23950000000245,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 97.4918289930676,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 74.45871875001843,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 37.49421378971486,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 16.943508421982475,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 31.24978298612968,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 27.320017992437048,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 58.81597023809864,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0.2722222222230676,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 36.36305555544893,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 29.909166666666792,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 39.7336538461655,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.592984375002256,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 29.012692307683377,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 48.90000000004417,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.6633333333381093,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 59.12500000006974,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 9.349850000000092,
            "hasRDI": true,
            "daily": 14.384384615384757,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 1.3989375000002102,
                "hasRDI": true,
                "daily": 6.994687500001051,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 1.9990400000001087,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 5.130702500000004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 22.903872916660927,
            "hasRDI": true,
            "daily": 7.634624305553642,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 16.41437291666005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 6.489500000000875,
                "hasRDI": true,
                "daily": 25.958000000003505,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 9.008297916660842,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 29.619750000001225,
            "hasRDI": true,
            "daily": 59.23950000000245,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2339.8038958336224,
            "hasRDI": true,
            "daily": 97.4918289930676,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 744.5871875001844,
            "hasRDI": true,
            "daily": 74.45871875001843,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 157.47569791680243,
            "hasRDI": true,
            "daily": 37.49421378971486,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 796.3448958331762,
            "hasRDI": true,
            "daily": 16.943508421982475,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.624960937503342,
            "hasRDI": true,
            "daily": 31.24978298612968,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 3.0052019791680755,
            "hasRDI": true,
            "daily": 27.320017992437048,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 411.7117916666905,
            "hasRDI": true,
            "daily": 58.81597023809864,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 2.4500000000076083,
            "hasRDI": true,
            "daily": 0.2722222222230676,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 32.72674999990404,
            "hasRDI": true,
            "daily": 36.36305555544893,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.3589100000000015,
            "hasRDI": true,
            "daily": 29.909166666666792,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.5165375000001515,
            "hasRDI": true,
            "daily": 39.7336538461655,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.654877500000361,
            "hasRDI": true,
            "daily": 16.592984375002256,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.37716499999988395,
            "hasRDI": true,
            "daily": 29.012692307683377,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 195.6000000001767,
            "hasRDI": true,
            "daily": 48.90000000004417,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 195.6000000001767,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.5495000000007164,
            "hasRDI": true,
            "daily": 3.6633333333381093,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 70.95000000008369,
            "hasRDI": true,
            "daily": 59.12500000006974,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 364.8883624996569,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/1e36671c98fa1ede67699bc4a26222ea?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_de05f9bf50999b6176cc703fcffef40c",
        "label": "Autumn Pork Chops",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bc6/bc6a56e8ac8a6c2e58a318b488544a65.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9cc8f530fa2d567b404660ae4385c5dddb1a08b50e1d5a3b64e8f9a21054713f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bc6/bc6a56e8ac8a6c2e58a318b488544a65-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=774bad102253303ade458cadb391ee14efe863ba38c4a2aafe60654dc6466974",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bc6/bc6a56e8ac8a6c2e58a318b488544a65-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1936c77d65f8b08efc552b22e6512f88d920ca944ec1ca6c5bdceee2ad283f39",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bc6/bc6a56e8ac8a6c2e58a318b488544a65.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9cc8f530fa2d567b404660ae4385c5dddb1a08b50e1d5a3b64e8f9a21054713f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bc6/bc6a56e8ac8a6c2e58a318b488544a65-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4b9969119c72cea129f673c81508ae0350746eee89e98eccb17da806d8c288fb",
            "width": 600,
            "height": 600
          }
        },
        "source": "BigOven",
        "url": "https://www.bigoven.com/recipe/autumn-pork-chops/164394",
        "shareAs": "http://www.edamam.com/recipe/autumn-pork-chops-de05f9bf50999b6176cc703fcffef40c/-/4-7-ing",
        "yield": 4,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1.5 pound Bone In, Center Cut Pork Chops ; (1/2 to 3/4 inch thick)",
          "2 medium Apples ; cored and thinly sliced - cooking variety",
          "1 large Onion ; sweet, very thinly sliced",
          "2 tablespoons Extra Virgin Olive Oil",
          "2 tablespoons Butter",
          "1 tablespoon Lemon juice"
        ],
        "ingredients": [
          {
            "text": "1.5 pound Bone In, Center Cut Pork Chops ; (1/2 to 3/4 inch thick)",
            "quantity": 1.5,
            "measure": "pound",
            "food": "Pork Chops",
            "weight": 680.388555,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "2 medium Apples ; cored and thinly sliced - cooking variety",
            "quantity": 2,
            "measure": "<unit>",
            "food": "Apples",
            "weight": 364,
            "foodCategory": "fruit",
            "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
            "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
          },
          {
            "text": "1 large Onion ; sweet, very thinly sliced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "2 tablespoons Extra Virgin Olive Oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Extra Virgin Olive Oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons Butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 tablespoon Lemon juice",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Lemon juice",
            "weight": 15.2499999997422,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          }
        ],
        "calories": 1851.6035434999433,
        "totalCO2Emissions": 9452.0557988619,
        "co2EmissionsClass": "F",
        "totalWeight": 1265.0385549997422,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1851.6035434999433,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 112.27688651649937,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 38.582637794499895,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.6259574706000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 50.555288702499986,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.000806304499944,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 65.31128999998221,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 53.979539999982975,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.331749999999229,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 44.617339999993504,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 143.7316058849991,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 530.52810295,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 387.6702052499975,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 193.61482544998455,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 204.78013874998453,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2965.006243649734,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.207327896499795,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 12.476662423499873,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1513.5880799499794,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 218.78377109999997,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 33.745749999900234,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 3.4358444917499384,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.4330178689499615,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.57276784099977,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.07941522834988,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 43.32199999994844,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 43.32199999994844,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.6543393415000005,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.401942775,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.071421265999614,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 26.85,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 938.1413728347621,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 92.58017717499716,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 172.7336715638452,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 192.91318897249948,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 21.770429999994068,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 45.326999999996914,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 287.4632117699982,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 176.84270098333332,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 16.152925218749893,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 19.361482544998456,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 48.75717589285346,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 63.08523922659008,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 28.929599424998862,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 113.42420384999883,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 216.22686856428277,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 24.309307899999997,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 37.49527777766693,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 286.3203743124949,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 110.23214376538165,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 284.82979900624855,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 390.7242483346062,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 10.83049999998711,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 152.2641392291667,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 22.6796185,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 40.47614177333076,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 22.375,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 112.27688651649937,
            "hasRDI": true,
            "daily": 172.7336715638452,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 38.582637794499895,
                "hasRDI": true,
                "daily": 192.91318897249948,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.6259574706000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 50.555288702499986,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 12.000806304499944,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 65.31128999998221,
            "hasRDI": true,
            "daily": 21.770429999994068,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 53.979539999982975,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 11.331749999999229,
                "hasRDI": true,
                "daily": 45.326999999996914,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 44.617339999993504,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 143.7316058849991,
            "hasRDI": true,
            "daily": 287.4632117699982,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 530.52810295,
            "hasRDI": true,
            "daily": 176.84270098333332,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 387.6702052499975,
            "hasRDI": true,
            "daily": 16.152925218749893,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 193.61482544998455,
            "hasRDI": true,
            "daily": 19.361482544998456,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 204.78013874998453,
            "hasRDI": true,
            "daily": 48.75717589285346,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2965.006243649734,
            "hasRDI": true,
            "daily": 63.08523922659008,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.207327896499795,
            "hasRDI": true,
            "daily": 28.929599424998862,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 12.476662423499873,
            "hasRDI": true,
            "daily": 113.42420384999883,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1513.5880799499794,
            "hasRDI": true,
            "daily": 216.22686856428277,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 218.78377109999997,
            "hasRDI": true,
            "daily": 24.309307899999997,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 33.745749999900234,
            "hasRDI": true,
            "daily": 37.49527777766693,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 3.4358444917499384,
            "hasRDI": true,
            "daily": 286.3203743124949,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.4330178689499615,
            "hasRDI": true,
            "daily": 110.23214376538165,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 45.57276784099977,
            "hasRDI": true,
            "daily": 284.82979900624855,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 5.07941522834988,
            "hasRDI": true,
            "daily": 390.7242483346062,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 43.32199999994844,
            "hasRDI": true,
            "daily": 10.83049999998711,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 43.32199999994844,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 3.6543393415000005,
            "hasRDI": true,
            "daily": 152.2641392291667,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.401942775,
            "hasRDI": true,
            "daily": 22.6796185,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 6.071421265999614,
            "hasRDI": true,
            "daily": 40.47614177333076,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 26.85,
            "hasRDI": true,
            "daily": 22.375,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 938.1413728347621,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/de05f9bf50999b6176cc703fcffef40c?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_11f8bcd7fa2bd62033df6578f38e5e15",
        "label": "Enchiladas Verde",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/acb/acb411efb7baf0c8a8858f086ebeb8ce.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=339d585cca20848c9c732977eaf9dae8c8d7935bb6275fb680b4b7f354982cbd",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/acb/acb411efb7baf0c8a8858f086ebeb8ce-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52df14c3e8c309c07b502dff49251d8001bedc0eea2c4b3695ab982de8dafc7a",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/acb/acb411efb7baf0c8a8858f086ebeb8ce-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d3a0d02f5c0077aae2b89e3f0cf9eee3a55469b28d9b152ab5e677a08f33e18b",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/acb/acb411efb7baf0c8a8858f086ebeb8ce.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bbca469a8e8f80aaefa6967ebcbf74749c927d7abdec548e28a48d7cefc851f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/acb/acb411efb7baf0c8a8858f086ebeb8ce-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d6375c7eb571789d77914317bb3ce154e35f7e4ad0372ad974264407d0f6f76",
            "width": 600,
            "height": 600
          }
        },
        "source": "Betty Crocker",
        "url": "http://www.bettycrocker.com/recipes/enchiladas-verde/f2075005-57a0-4308-9044-ee17fce04be8",
        "shareAs": "http://www.edamam.com/recipe/enchiladas-verde-11f8bcd7fa2bd62033df6578f38e5e15/-/4-7-ing",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Eggs",
          "Milk",
          "Sulfites"
        ],
        "ingredientLines": [
          "8 corn tortillas (6 inch)",
          "2 cups shredded cooked chicken",
          "1 3/4 cups green tomatillo salsa",
          "1 cup crumbled queso quesadilla cheese (4 oz)",
          "1/4 cup sour cream",
          "1/2 cup finely chopped onion",
          "Cilantro leaves, if desired"
        ],
        "ingredients": [
          {
            "text": "8 corn tortillas (6 inch)",
            "quantity": 8,
            "measure": "<unit>",
            "food": "corn tortillas",
            "weight": 192,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_bhw0b95agm97s0abfignnb8fsvb3",
            "image": "https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg"
          },
          {
            "text": "2 cups shredded cooked chicken",
            "quantity": 2,
            "measure": "cup",
            "food": "cooked chicken",
            "weight": 280,
            "foodCategory": "Poultry",
            "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
            "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
          },
          {
            "text": "1 3/4 cups green tomatillo salsa",
            "quantity": 1.75,
            "measure": "cup",
            "food": "salsa",
            "weight": 453.25,
            "foodCategory": "canned soup",
            "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
            "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
          },
          {
            "text": "1 cup crumbled queso quesadilla cheese (4 oz)",
            "quantity": 4,
            "measure": "ounce",
            "food": "cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/4 cup sour cream",
            "quantity": 0.25,
            "measure": "cup",
            "food": "sour cream",
            "weight": 57.5,
            "foodCategory": "Dairy",
            "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
            "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
          },
          {
            "text": "1/2 cup finely chopped onion",
            "quantity": 0.5,
            "measure": "cup",
            "food": "onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "Cilantro leaves, if desired",
            "quantity": 0,
            "measure": null,
            "food": "Cilantro leaves",
            "weight": 11.761480925,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1623.1519533877502,
        "totalCO2Emissions": 9060.57730417175,
        "co2EmissionsClass": "F",
        "totalWeight": 1187.909573425,
        "totalTime": 0,
        "cuisineType": [
          "south american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1623.1519533877502,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 73.86424950330999,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 33.3079285898295,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.45770000000000005,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 21.740299958293754,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.854449623720003,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 130.1152120671975,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 107.71814060129749,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.397071465899998,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 25.8643107280475,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.3350827262025,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 356.189111575,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4285.932325250499,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1214.57664896975,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 312.45297001550006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2580.8923659192506,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 8.2284355418725,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 12.099297971625,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1878.559331719,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 630.93526244225,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 18.22484984975,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.59271813904475,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3040374349985,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 30.228157312842498,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.56001234762825,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 98.28960314850002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 98.28960314850002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.1801290175000005,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.6803885550000001,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.672863479875,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 59.8543950875,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 847.48733345285,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 81.15759766938751,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 113.63730692816922,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 166.53964294914752,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 43.3717373557325,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 89.58828586359999,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 232.67016545240503,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 118.72970385833335,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 178.58051355210415,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 121.457664896975,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 74.39356428940478,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 54.91260353019682,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 45.713530788180556,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 109.99361792386365,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 268.36561881700004,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 70.10391804913888,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 20.24983316638889,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 49.39317825372917,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 100.31057192296154,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 188.92598320526562,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 196.92402674063462,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.572400787125005,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 90.83870906250003,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.535923700000001,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 51.15242319916667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 49.878662572916674,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 73.86424950330999,
            "hasRDI": true,
            "daily": 113.63730692816922,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 33.3079285898295,
                "hasRDI": true,
                "daily": 166.53964294914752,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.45770000000000005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 21.740299958293754,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 8.854449623720003,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 130.1152120671975,
            "hasRDI": true,
            "daily": 43.3717373557325,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 107.71814060129749,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 22.397071465899998,
                "hasRDI": true,
                "daily": 89.58828586359999,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 25.8643107280475,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 116.3350827262025,
            "hasRDI": true,
            "daily": 232.67016545240503,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 356.189111575,
            "hasRDI": true,
            "daily": 118.72970385833335,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4285.932325250499,
            "hasRDI": true,
            "daily": 178.58051355210415,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1214.57664896975,
            "hasRDI": true,
            "daily": 121.457664896975,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 312.45297001550006,
            "hasRDI": true,
            "daily": 74.39356428940478,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2580.8923659192506,
            "hasRDI": true,
            "daily": 54.91260353019682,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 8.2284355418725,
            "hasRDI": true,
            "daily": 45.713530788180556,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 12.099297971625,
            "hasRDI": true,
            "daily": 109.99361792386365,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1878.559331719,
            "hasRDI": true,
            "daily": 268.36561881700004,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 630.93526244225,
            "hasRDI": true,
            "daily": 70.10391804913888,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 18.22484984975,
            "hasRDI": true,
            "daily": 20.24983316638889,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.59271813904475,
            "hasRDI": true,
            "daily": 49.39317825372917,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.3040374349985,
            "hasRDI": true,
            "daily": 100.31057192296154,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 30.228157312842498,
            "hasRDI": true,
            "daily": 188.92598320526562,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.56001234762825,
            "hasRDI": true,
            "daily": 196.92402674063462,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 98.28960314850002,
            "hasRDI": true,
            "daily": 24.572400787125005,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 98.28960314850002,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.1801290175000005,
            "hasRDI": true,
            "daily": 90.83870906250003,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.6803885550000001,
            "hasRDI": true,
            "daily": 4.535923700000001,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 7.672863479875,
            "hasRDI": true,
            "daily": 51.15242319916667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 59.8543950875,
            "hasRDI": true,
            "daily": 49.878662572916674,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 847.48733345285,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/11f8bcd7fa2bd62033df6578f38e5e15?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_15c56a8b5e77cc3bd5f2ad1d094b14d5",
        "label": "Minted Couscous",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3f0/3f0b826430c5cf90258c95df63c29f58.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc792560adcc5c2483672169b831ccfc33b12c599686f525996bddd6af53c8c2",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3f0/3f0b826430c5cf90258c95df63c29f58-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=343a001db258375cf7e56c4f73a760cc731cdbd9ecbb307237e303002ab6f7c1",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3f0/3f0b826430c5cf90258c95df63c29f58-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c954548c6cd8657660eeb7888810c1688c6dd272fd0e1d5c2c80b49150b34c22",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3f0/3f0b826430c5cf90258c95df63c29f58.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc792560adcc5c2483672169b831ccfc33b12c599686f525996bddd6af53c8c2",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3f0/3f0b826430c5cf90258c95df63c29f58-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67de420794183355f16df3724cb5196cecb2fc5b1d309bcdea2bedde7589ab9a",
            "width": 600,
            "height": 600
          }
        },
        "source": "Martha Stewart",
        "url": "http://www.marthastewart.com/336790/minted-couscous",
        "shareAs": "http://www.edamam.com/recipe/minted-couscous-15c56a8b5e77cc3bd5f2ad1d094b14d5/-/4-7-ing",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Kidney-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup couscous",
          "Coarse salt and ground pepper",
          "4 scallions, thinly sliced",
          "1/2 cup torn mint leaves",
          "1 tablespoon olive oil",
          "1 tablespoon fresh lime juice"
        ],
        "ingredients": [
          {
            "text": "1 cup couscous",
            "quantity": 1,
            "measure": "cup",
            "food": "couscous",
            "weight": 173,
            "foodCategory": "grains",
            "foodId": "food_ath4mfgbrn9z6gaijwn1wb2pf4oq",
            "image": "https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg"
          },
          {
            "text": "Coarse salt and ground pepper",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 1.8183333333363971,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and ground pepper",
            "quantity": 0,
            "measure": null,
            "food": "ground pepper",
            "weight": 0.9091666666681986,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "4 scallions, thinly sliced",
            "quantity": 4,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 55.555555555555564,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1/2 cup torn mint leaves",
            "quantity": 0.5,
            "measure": "cup",
            "food": "mint leaves",
            "weight": 45.60000000077095,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
            "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 tablespoon fresh lime juice",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "lime juice",
            "weight": 15.399999999739633,
            "foodCategory": "fruit",
            "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
            "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
          }
        ],
        "calories": 813.7937861113892,
        "totalCO2Emissions": 414.6373056840927,
        "co2EmissionsClass": "B",
        "totalWeight": 305.6818231506005,
        "totalTime": 10,
        "cuisineType": [
          "middle eastern"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 813.7937861113892,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 15.086054388894384,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 2.1841531944459174,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 10.04332074166685,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.086850594447437,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.69328444448834,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 130.20642083332547,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 13.486863611162883,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.560523111106721,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 24.82014000002443,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 706.8638822345243,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 178.99471255752573,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 118.76295712085725,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 679.743618077476,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 8.30042873870917,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.1744628509360795,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 345.6080388893174,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 120.89925277933801,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.129244444468874,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.35294545555609347,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.26313094444575735,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 6.793887166673623,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.30473456389001247,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 119.73011388967262,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 119.73011388967262,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.292890888888332,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 124.71043333333431,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 117.83156892450167,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 40.68968930556946,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 23.209314444452897,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.920765972229587,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 47.89776148149611,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 53.94745444465153,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 49.64028000004886,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 29.452661759771846,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 17.899471255752573,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 28.27689455258506,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 14.462630171861191,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 46.113492992828725,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 19.767844099418905,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 49.3725769841882,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 13.433250308815335,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 23.47693827163208,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 29.412121296341123,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 20.240841880442872,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 42.46179479171015,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 23.441120299231727,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 29.932528472418156,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 15.285939259255548,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 103.92536111111193,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 15.086054388894384,
            "hasRDI": true,
            "daily": 23.209314444452897,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 2.1841531944459174,
                "hasRDI": true,
                "daily": 10.920765972229587,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 10.04332074166685,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.086850594447437,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 143.69328444448834,
            "hasRDI": true,
            "daily": 47.89776148149611,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 130.20642083332547,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 13.486863611162883,
                "hasRDI": true,
                "daily": 53.94745444465153,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 1.560523111106721,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 24.82014000002443,
            "hasRDI": true,
            "daily": 49.64028000004886,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 706.8638822345243,
            "hasRDI": true,
            "daily": 29.452661759771846,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 178.99471255752573,
            "hasRDI": true,
            "daily": 17.899471255752573,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 118.76295712085725,
            "hasRDI": true,
            "daily": 28.27689455258506,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 679.743618077476,
            "hasRDI": true,
            "daily": 14.462630171861191,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 8.30042873870917,
            "hasRDI": true,
            "daily": 46.113492992828725,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 2.1744628509360795,
            "hasRDI": true,
            "daily": 19.767844099418905,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 345.6080388893174,
            "hasRDI": true,
            "daily": 49.3725769841882,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 120.89925277933801,
            "hasRDI": true,
            "daily": 13.433250308815335,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 21.129244444468874,
            "hasRDI": true,
            "daily": 23.47693827163208,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.35294545555609347,
            "hasRDI": true,
            "daily": 29.412121296341123,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.26313094444575735,
            "hasRDI": true,
            "daily": 20.240841880442872,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 6.793887166673623,
            "hasRDI": true,
            "daily": 42.46179479171015,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.30473456389001247,
            "hasRDI": true,
            "daily": 23.441120299231727,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 119.73011388967262,
            "hasRDI": true,
            "daily": 29.932528472418156,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 119.73011388967262,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.292890888888332,
            "hasRDI": true,
            "daily": 15.285939259255548,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 124.71043333333431,
            "hasRDI": true,
            "daily": 103.92536111111193,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 117.83156892450167,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/15c56a8b5e77cc3bd5f2ad1d094b14d5?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9bb6c7429b0c9220c6040a2cdc314b69",
        "label": "Garam Masala Roasted Sweet Potatoes recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a05/a05a3d075cf584fecf3a52966a48e35e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df5eeacbcf36a0e7be6aca249575fe3f83519afa1de5cb3e30b5a190d9a0921d",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a05/a05a3d075cf584fecf3a52966a48e35e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b9aa28699c79f63ff772babd94c8f77aef0a4fc6928dc4b35dbbf258b9a781e8",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a05/a05a3d075cf584fecf3a52966a48e35e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fb2963d1452bfc0c3d5a58084eec6f220bb152c4a9943e5901806c04a7283826",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a05/a05a3d075cf584fecf3a52966a48e35e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDBHIXJXqU5xfbuXideCmSrtHk5RPjSdTUxOkIl6pWGyAIhALri7qpypC42ZYH17Bhy7ELZ5NHn7n5E2q0PTiEUpY%2FAKrkFCD0QABoMMTg3MDE3MTUwOTg2Igw7qWzHWy8EAdaMiAkqlgUeEKlecSvdq1MSGi6Td3uJGNhZJpzV3%2B6bN51394GrfRrz6ciNZeQXi%2FIV85QcLgGrZsJMrDZkMnECLXO4Gf4bkWgTGXWssgNcVfIuT61M1TwONrKvNEC8yUl16sdqXUojm%2BG%2F2bnj7ioJKdXKE4stZLpknK%2FX76zmjHZfOaC6XPPxzlE215QKTPerS2Hlhgmg8YwozeYG6lfhPSSZfHtc4cneND97tM7d5UdvAfVLsKGngI069%2B2mmM5ydrlgH73clfh%2F%2B4%2F9hikaOBf1bK8W7M%2FWJhHihpVW1NCa%2FVybDNL%2F1SAvC%2Bgnd%2FTMO3mLisORSPZXUtWDamrDd3%2FQYWdwsqjPfl9qgjkFGkUP7UkcGLvv0PZcFIdtCyW%2FoUZNckyngXH5B3aaLy7%2BZ0a4zhcQFxjplY%2FK45Mk8c%2BvQ8dhMPOyPDt9OapJnDeOrXr3Pr269fXeGghTWRYPn3XA8Y3cI5ueef0jx5uneGd%2FS9n2UW8lkPWChdqb8En5H%2Bm683RitGfh%2BnI1A07lXCPPuZXRc7AsCHy5kLAl%2BIj3yTEgqDf1XGPAhQiEqRCxI6OdGPo%2FjSizphRO9gh7TdpQPKEHtCC6AOpPezPpxRj6r4mumcxpChRVW%2B0RxjeNYKOy0XqvD%2BBqS1aaamGQRQXx%2BCcoHyfIHdYENSohRSwa9u%2BiUrGqRcwzJUewXPlVzKcf2gKiApXP4r53KIB3u6meOjFlRI%2BA%2BqgKl6ZDK2xjIy5jGxYAyfLNjych7S7Ip50ua5433tiSaC9Q%2FIp2CxQarcJd7nWvGAYNW5z8bjsA0um7xb%2B4MtQdOxS8M%2FJlL6gn12%2BsTxFOhmF2lvwiVPaqB3M38qKur0TKuFtyOVOyuOGjCA5hQNzlsTDly82lBjqwARDw%2FgYsfzEkZ%2B%2Bym0auuaOIsYeIx%2Bd57WCfPIpm77vZPvBOjME29tqkymnpk5Sg8guRCoaiP5dea8JFS6yKuWus%2FnU1mzSBwXLV1z9zy0g4CuRTRSJESw%2BcKANexu336rQbWgu%2Bqjtdi0F0VAhkfwzCJF2uCcrSJwLTqcfFB%2BoBApt%2BZz12p5lLrbKjWRyTjYqBAj92WXXvaGbnrmksCDzV5qyPZaitgzfe1DRKwCjv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230716T045819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF2QZBWCQ%2F20230716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df5eeacbcf36a0e7be6aca249575fe3f83519afa1de5cb3e30b5a190d9a0921d",
            "width": 300,
            "height": 300
          }
        },
        "source": "chezcayenne.com",
        "url": "http://chezcayenne.com/2014/01/garam-masala-roasted-sweet-potatoes/",
        "shareAs": "http://www.edamam.com/recipe/garam-masala-roasted-sweet-potatoes-recipes-9bb6c7429b0c9220c6040a2cdc314b69/-/4-7-ing",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium sweet potatoes, about 1-1/2 pounds",
          "1/2 teaspoon garam masala",
          "1/4 teaspoon cumin",
          "1/4 teaspoon coriander",
          "1/4 teaspoon salt",
          "1 teaspoon sugar",
          "1-1/2 tablespoons canola oil"
        ],
        "ingredients": [
          {
            "text": "2 medium sweet potatoes, about 1-1/2 pounds",
            "quantity": 1.5,
            "measure": "pound",
            "food": "sweet potatoes",
            "weight": 680.388555,
            "foodCategory": "vegetables",
            "foodId": "food_bg68yf2b3dlfusawgs590bjloxfd",
            "image": "https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg"
          },
          {
            "text": "1/2 teaspoon garam masala",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "masala",
            "weight": 0.95,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bwlqp2wb01krjcbnzizdga6et64z",
            "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
          },
          {
            "text": "1/4 teaspoon cumin",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 0.525,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1/4 teaspoon coriander",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "coriander",
            "weight": 0.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_afpcy6rb44nx6gbfff63ga2cqksw",
            "image": "https://www.edamam.com/food-img/a90/a901cee0b9028841d258f5d07b5924e7.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon sugar",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 4.2,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1-1/2 tablespoons canola oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "canola oil",
            "weight": 21,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          }
        ],
        "calories": 628.9988432560001,
        "totalCO2Emissions": 394.99938647700003,
        "co2EmissionsClass": "C",
        "totalWeight": 709.0135550000001,
        "totalTime": 30,
        "cuisineType": [
          "south american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 628.9988432560001,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 21.5246698798,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.6705433567280001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.08295,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 13.438868797596,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.017098166344,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 103.83033167960002,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 88.68506389160002,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.145267788,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 24.680386451280004,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 4.1916,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 7.898217225720001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 853.2468677800001,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 161.72367788000008,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 127.17393990000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1676.0912898520003,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.4843365335600005,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.5275042788000004,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 235.77723701200003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3473.839995564,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 12.264439230400003,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.38743821248800003,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.303244903356,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.7894302609720003,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0281274475639999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 54.28127355600001,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 54.28127355600001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.96616987496,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 23.8191856728,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 378.8434491708,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 31.449942162800006,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 33.11487673815385,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 8.352716783640002,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 34.610110559866676,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 60.58107115200001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 15.796434451440001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 35.551952824166676,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 16.17236778800001,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 30.2795095,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 35.66151680536171,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 19.357425186444445,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 13.886402534545459,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 33.68246243028572,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 385.98222172933333,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.627154700444448,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 32.28651770733334,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 23.326531027384615,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 17.433939131075,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 79.0867267356923,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 13.570318389,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 33.1077991664,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 19.849321394,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 21.5246698798,
            "hasRDI": true,
            "daily": 33.11487673815385,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 1.6705433567280001,
                "hasRDI": true,
                "daily": 8.352716783640002,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.08295,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 13.438868797596,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 6.017098166344,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 103.83033167960002,
            "hasRDI": true,
            "daily": 34.610110559866676,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 88.68506389160002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 15.145267788,
                "hasRDI": true,
                "daily": 60.58107115200001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 24.680386451280004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 4.1916,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 7.898217225720001,
            "hasRDI": true,
            "daily": 15.796434451440001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 853.2468677800001,
            "hasRDI": true,
            "daily": 35.551952824166676,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 161.72367788000008,
            "hasRDI": true,
            "daily": 16.17236778800001,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 127.17393990000001,
            "hasRDI": true,
            "daily": 30.2795095,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1676.0912898520003,
            "hasRDI": true,
            "daily": 35.66151680536171,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 3.4843365335600005,
            "hasRDI": true,
            "daily": 19.357425186444445,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 1.5275042788000004,
            "hasRDI": true,
            "daily": 13.886402534545459,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 235.77723701200003,
            "hasRDI": true,
            "daily": 33.68246243028572,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 3473.839995564,
            "hasRDI": true,
            "daily": 385.98222172933333,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 12.264439230400003,
            "hasRDI": true,
            "daily": 13.627154700444448,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.38743821248800003,
            "hasRDI": true,
            "daily": 32.28651770733334,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.303244903356,
            "hasRDI": true,
            "daily": 23.326531027384615,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.7894302609720003,
            "hasRDI": true,
            "daily": 17.433939131075,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.0281274475639999,
            "hasRDI": true,
            "daily": 79.0867267356923,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 54.28127355600001,
            "hasRDI": true,
            "daily": 13.570318389,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 54.28127355600001,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 4.96616987496,
            "hasRDI": true,
            "daily": 33.1077991664,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 23.8191856728,
            "hasRDI": true,
            "daily": 19.849321394,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 378.8434491708,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://api.edamam.com/api/recipes/v2/9bb6c7429b0c9220c6040a2cdc314b69?type=public&app_id=40a2f17b&app_key=b5e3281cf665659ee49b75e24aff4880",
          "title": "Self"
        }
      }
    }
]