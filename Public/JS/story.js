var storySchema = new schema({
	title: {type: string},
	body: string,
	created: {type: date},
	author: {type: schema.objectID, ref: 'user'}
})

return storySchema