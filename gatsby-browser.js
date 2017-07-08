import ReactGa from 'react-ga';
ReactGa.initialize('UA-102021418-1');


export const onRouteUpdate = (state) => {
    // Send page view to google analytics
    ReactGa.pageview(state.pathname);
}