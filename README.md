# Writeit - personal blog for developers

## Project specification

#### ****Primary language****

- typescript

#### **Api**
- nodejs ([ECMAScript modules](https://nodejs.org/api/esm.html) by default)
- [tsx](https://github.com/esbuild-kit/tsx) - [much faster](https://esbuild.github.io/faq/#benchmark-details) alternative to [ts-node](https://typestrong.org/ts-node/)
- mongodb
- express

#### **Web**

- [vue](https://vuejs.org/)
- [vue-router](https://router.vuejs.org/)
- [vite](https://vitejs.dev/)
- [pinia](https://pinia.vuejs.org/) (state management)
- [tailwindcss](https://tailwindcss.com/) + [daisyui](https://daisyui.com/) styling and basic components

## Running the project
**Requires docker**
```
docker-compose up
```

## Installing dependencies

Dependencies cannot be installed directly, it may be done via docker-compose

### For api:
```
docker-compose exec api npm i ...
```

### For web:

```
docker-compose exec web npm i ...
```
