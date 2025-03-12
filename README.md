# Task Managment FE

If you want to see the backend of this you can see
[Backend Task Managment](https://github.com/eacarras/task_managment_backend)

### Infraestructure proposed
This includes the BE mentioned before
<img width="736" alt="Screenshot 2025-03-12 at 6 55 31 AM" src="https://github.com/user-attachments/assets/428e9846-4a34-49b9-a1e1-658e51152ea3" />

### Other important information about the project
For generate this we use Vite + React:
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to run locally
### The not cool way

Let's run
```
npm install
npm run dev
```

### The cool way
Let's use Docker for this, just run
```
docker build -t task-app .
docker run -p 5173:5173 task-app
```

## How to run the tests

Remember first run `npm install`
Then just run
```
npm run test
```

## Missing steps
- [ ] Use property the structure proposed instead of just one file in everything
- [ ] Add e2e test
- [ ] Complete deployment process for this we will add a listener in Amplify to hear changes in our master branch
- [ ] Add CI/CD with build and test to better track of any new changes in the UI
- [ ] Improve UI/UX
 
