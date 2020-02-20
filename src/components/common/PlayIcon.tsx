import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React from "react";

function PlayIcon({ style }: { style: React.CSSProperties }) {
	return <PlayCircleFilledIcon fontSize="small" style={style} />;
}

export default React.memo(PlayIcon);
