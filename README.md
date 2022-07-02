# Writeit - personal blog for developers

## Project specification

### Main dependencies

- nodejs
- [tsx](https://github.com/esbuild-kit/tsx) - [much faster](https://esbuild.github.io/faq/#benchmark-details) alternative to [ts-node](https://typestrong.org/ts-node/)
- mongodb
- vuejs
- typescript
- express

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
