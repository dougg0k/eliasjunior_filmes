exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
	if (page.path.match(/^\/series/)) {
		page.matchPath = "/series/*";
		createPage(page);
	}
};
