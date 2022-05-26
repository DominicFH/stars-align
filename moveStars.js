const moveStars = (stars) => {
	stars.forEach((star) => {
		star.position[0] += star.velocity[0];
		star.position[1] += star.velocity[1];
	});
	return stars;
};

module.exports = moveStars;
