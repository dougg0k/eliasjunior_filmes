import { RouteComponentProps } from "@reach/router";
import * as React from "react";

type Props = { component: React.FunctionComponent } & RouteComponentProps;

const Route: React.FunctionComponent<Props> = ({
	component: Component,
	...rest
}) => <Component {...rest} />;

export default Route;
