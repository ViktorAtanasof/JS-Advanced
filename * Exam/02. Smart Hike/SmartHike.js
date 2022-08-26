class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, attitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = attitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw Error(`${peak} is not in your current goals`);
        }
        if (this.goals.hasOwnProperty(peak) && this.resources == 0) {
            throw Error("You don't have enough resources to start the hike");
        }

        const neededResources = time * 10;
        if (this.resources - neededResources < 0) {
            return "You don't have enough resources to complete the hike";
        }

        if (this.resources - neededResources > 0) {
            this.resources -= neededResources;
            //this.resources -= difference;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        const allHikes = this.listOfHikes.filter(e => e.difficultyLevel == criteria);
        const bestHike = this.listOfHikes.sort((a, b) => a.time - b.time);


        if (criteria == 'all') {
            let result = '';
            result += 'All hiking records:\n';

            for (let ele of allHikes) {
                result += `${ele.username} hiked ${ele.peak} for ${ele.time} hours\n`;
            }

            return result;
        }

        const noHike = this.listOfHikes.find(e => e.difficultyLevel == criteria);
        if (noHike == undefined) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike[0].peak} peak, for ${bestHike[0].time} hours`;
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



