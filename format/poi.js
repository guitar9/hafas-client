'use strict'

const formatLocationIdentifier = require('./location-identifier')
const formatCoord = require('./coord')

const formatPoi = (p) => {
	if (p.type !== 'location' || !p.latitude || !p.longitude || !p.id || !p.name) {
		throw new Error('invalid POI')
	}

	return {
		name: p.name,
		lid: formatLocationIdentifier({
			A: '4', // POI
			O: p.name,
			L: p.id,
			X: formatCoord(p.longitude),
			Y: formatCoord(p.latitude)
		})
	}
}

module.exports = formatPoi
