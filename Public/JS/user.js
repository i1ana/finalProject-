var userSchema = new schema({
	fName: {type: string},
	lName: string,
	email: string,
	password: string, 
	stories: [storySchema],
})

return userSchema