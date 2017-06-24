import * as ReactDOM from 'react-dom';
import * as React from 'react';


import { createBrowserHistory, Location, UnregisterCallback } from 'history';
const history = createBrowserHistory();

import * as pathToRegexp from 'path-to-regexp';

type RouteAction = (params: any) => React.ReactElement<any> | null;

type RouteConfig = {
	path: string,
	action: RouteAction
}

function matchURI(path: string, uri: string) {
	const keys: pathToRegexp.Key[] = [];
	const pattern = pathToRegexp(path, keys);
	const match = pattern.exec(uri);
	if (!match) return null;
	const params = Object.create(null);
	for (let i = 1; i < match.length; i++) {
		params[keys[i - 1].name] = match[i];
			//  !== undefined ? match[i] : undefined;
	}
	return params;
}

type ResolverContext = string;

function resolve<P>(routes: RouteConfig[], uri: string): React.ReactElement<P> {
	for (const route of routes) {
		const params = matchURI(route.path, uri);
		if (!params) continue;
		const result = route.action(params);
		if (result) return result;
	}

	throw new Error('Not found');
}

type SimpleRouterProps = {
	routes: RouteConfig[]
}

type SimpleRouterState = {
	component?: React.ReactElement<any>
}

class SimpleRouter extends React.Component<SimpleRouterProps, SimpleRouterState> {
	historyListenerUnregisterCallback: UnregisterCallback;

	constructor(props: SimpleRouterProps) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.historyListenerUnregisterCallback = history.listen(newLocation => {
			this.historyChange(newLocation.pathname);
		})

		this.historyChange(history.location.pathname);
	}

	historyChange(newPathname: string) {
		const component = resolve(this.props.routes, newPathname);
		this.setState({ component });
	}

	componentWillUnmount() {
		this.historyListenerUnregisterCallback && this.historyListenerUnregisterCallback();
	}

	render() {
		const { component } = this.state;
		return component ? component : <h1>Not Found</h1>
	}
}

 const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
	 event.preventDefault();
	 console.log("event", event.currentTarget);
	 console.dir(event.currentTarget.pathname);

    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
 };


const historyPush = (pathname: string) => history.push(pathname);


type LinkProps = {
	to: string,
	children?: React.ReactNode
}
const Link = (props: LinkProps) => <a href={props.to} onClick={handleLinkClick}>{props.children}</a>

export {
	SimpleRouter, SimpleRouterProps, RouteConfig,

	Link, LinkProps,
	historyPush
};
