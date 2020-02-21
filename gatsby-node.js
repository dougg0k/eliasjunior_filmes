exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
	if (page.path.match(/^\/filmes/)) {
		page.matchPath = "/filmes/*";
		createPage(page);
	}
	if (page.path.match(/^\/series/)) {
		page.matchPath = "/series/*";
		createPage(page);
	}
};
