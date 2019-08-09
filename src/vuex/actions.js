const actions = {
	addNum ({commit}, data) {
		commit("ADD_NUM", data);
	},
	minNum ({commit}, data) {
		commit("MIN_NUM", data);
	}
};

export default actions;