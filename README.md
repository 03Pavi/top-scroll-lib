# Top Scroll

A simple and lightweight npm package that adds a top progress scroll bar to your website, indicating how much you have scrolled.

## Installation

Install the package using npm or yarn:

```sh
npm install top-scroll-bar
```

or

```sh
yarn add top-scroll-bar
```

## Usage

Import and initialize the top scroll bar in your project:

```ts
import { TopScrollBar } from "top-scroll-bar";
```

This will display a progress bar at the top of the page that updates as the user scrolls.

## Customization

You can pass options to customize the appearance of the scroll bar:

```ts
<TopScrollBar
    sx={{
    ...custom css properties
    }}
/>
```

### Available Options
| Option  | Type   | Default  | Description |
|---------|--------|----------|-------------|
| `isRouned` | boolean | `false` | Round edge the progress bar |
| `originFrom` | enum (center, left, right) | `center` | origin of the progress bar |

## Example

```ts
import { TopScrollBar } from "top-scroll-bar";

<TopScrollBar rounded style={{ zindex: -1 }}/>
```

## License

MIT License

