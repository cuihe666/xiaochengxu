import { ADD_NUM, MIN_NUM } from "./mutations_file";

const mutations = {
	[ADD_NUM] (state, data) {
		state.num = data.num;
	},
	[MIN_NUM] (state, data) {
		state.num = data.num;
	}
};

export default mutations;