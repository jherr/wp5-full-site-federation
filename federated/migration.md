Migration from Non-Federated to Federated
=========================================

We start off with a system that looks like this:

![Starting Point](./diagrams/original-state.png)

## Step 1

Then we bring the `AddToCart` React component into the `checkout` application and share it out to `home` and `search`.

![Step 1](./diagrams/step-1.png)

## Step 2

We move the `Frame` React component into the `home` application and share it out to all the applications, including home.

![Step 2](./diagrams/step-2.png)

The implementation of `Frame` remains the same though. We will move to React Router and do the Single Page Application work in Step 5.

## Step 3

We move the Redux store into the `checkout` application, which makes the most sense since it's mostly about the cart. All the applications then consume it from there.

![Step 3](./diagrams/step-3.png)

## Step 4

We take the API functions that talk to the `product` service and move them into the `search` app since it's mainly working with the product catalog. And the API handlers for the `cart` service go into the `checkout` app.

![Step 4](./diagrams/step-4.png)

## Step 5

We export all the React components that have the body content for the applications, and have `Frame` consume those and use `react-router-dom` for SPA based navigation.

![Step 5](./diagrams/step-5.png)

