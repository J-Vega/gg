import React from 'react';
import Article from './article';
import './newsfeed.css';

export default class Newsfeed extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			displayCategory: "all",

			currentCategory: '',

			articles: [
				{
					title: "Cadence of Hyrule Analassment - Unplayable",
					date: "June 2019",
					imagelink: "/SmashDLCLeak.png",
					category: "Nintendo",
					intro: "This game is so bad, the Switch won't even let you play it.",
					paragraph: "You ever get frustrated over game-breaking bugs, or find an inifinite-gold glitch that reminds you this whole thing is just a game? Well Cadence of Hyrule does it all for you, and the best part is, you don't have to spend a second of gameplay! I mean you already spent 25 dollars on this game, be grateful that's all Nintendo made you waste.",
					link: "article/cadence-of-hyrule-analassment"
				},
				{
					title: "Games of Thrones reveals why Drogon really burned the throne",
					date: "June 2019",
					imagelink: "/drogonburningthrone.png",
					category: "Television",
					paragraph: "blah blah",
					link: "article/Games-of-Thrones-reveals-why-Drogon-really-burned-the-throne"
				},
				{
					title: "The End of Console Wars: Microsoft Nintendo and Sony form holy trinity to defeat Google Stadia",
					date: "June 2019",
					imagelink: "/SmashDLCLeak.png",
					category: ["Xbox", "Playstation", "Nintendo"],
					intro: "Gaming execs realize they must team together, or face the Night King of gaming.",
					paragraph: "Sony made waves last month when chief architect Mike Cerny gave a first look at the specs for the next-gen successor to the PlayStation 4, making them the first to throw their hat in the ring for the next round of console wars. But all that excitement just fell by the wayside because today, in a major blow to Sony’s upcoming plans for the PlayStation 5, Microsoft announced its new console: the PlayStation 6.If you are working at Sony, you can’t be happy about this.The PlayStation 4 has both a rabid fanbase and by far the biggest market share for gaming consoles, currently more than the Xbox One and Switch combined, so for Microsoft to scoop Sony on the next generation of PlayStation is a huge setback. Not only will the PlayStation 6 boast 10th-generation graphics and performance that the ninth generation PS5 can’t match, but Microsoft has also positioned itself to capitalize on the built-in 90-million-person user base of the PlayStation Network.The PlayStation 6 will also seriously upend Sony’s former dominance in the software department, giving Microsoft access to the huge array of popular PlayStation-exclusive titles such as Uncharted and God Of War. If that wasn’t a big enough slap in the face to Sony, it was revealed during the announcement that the PlayStation 6 will be backwards compatible with all PlayStation games, including the PlayStation 5. Ouch. After the struggles of the Xbox One, Microsoft needed to swing for the fences, and it looks like they just hit it out of the park.It remains to be seen how Sony responds to getting leapfrogged by Microsoft like this. Some Sony fanboys are already insisting the PlayStation 5 will be better than the PlayStation 6, but it’s going to be a hard sell when the 5 is inferior in every technological sense and has no exclusive games. Sony’s best hope to stay relevant may be appealing to completionist gamers who will want to own both a PlayStation 5 and a PlayStation 6, but no matter what happens, it seems like they will be fighting for second place. By losing out on the next generation of PlayStations to Microsoft, Sony’s place at the top of the console market may have just come to an end.",
					link: "article/the-end-of-console-wars"
				},
				{
					title: "Youtubers for KKK to make up fake leaks capitalize off gullible Smash Fans",
					date: "June 2019",
					imagelink: "/SmashDLCLeak.png",
					category: "Nintendo",
					intro: "4Chan and Youtube 'Klickbait Kontent Kreators' on the rise with upcoming Smash reveal",
					paragraph: "Sony made waves last month when chief architect Mike Cerny gave a first look at the specs for the next-gen successor to the PlayStation 4, making them the first to throw their hat in the ring for the next round of console wars. But all that excitement just fell by the wayside because today, in a major blow to Sony’s upcoming plans for the PlayStation 5, Microsoft announced its new console: the PlayStation 6.If you are working at Sony, you can’t be happy about this.The PlayStation 4 has both a rabid fanbase and by far the biggest market share for gaming consoles, currently more than the Xbox One and Switch combined, so for Microsoft to scoop Sony on the next generation of PlayStation is a huge setback. Not only will the PlayStation 6 boast 10th-generation graphics and performance that the ninth generation PS5 can’t match, but Microsoft has also positioned itself to capitalize on the built-in 90-million-person user base of the PlayStation Network.The PlayStation 6 will also seriously upend Sony’s former dominance in the software department, giving Microsoft access to the huge array of popular PlayStation-exclusive titles such as Uncharted and God Of War. If that wasn’t a big enough slap in the face to Sony, it was revealed during the announcement that the PlayStation 6 will be backwards compatible with all PlayStation games, including the PlayStation 5. Ouch. After the struggles of the Xbox One, Microsoft needed to swing for the fences, and it looks like they just hit it out of the park.It remains to be seen how Sony responds to getting leapfrogged by Microsoft like this. Some Sony fanboys are already insisting the PlayStation 5 will be better than the PlayStation 6, but it’s going to be a hard sell when the 5 is inferior in every technological sense and has no exclusive games. Sony’s best hope to stay relevant may be appealing to completionist gamers who will want to own both a PlayStation 5 and a PlayStation 6, but no matter what happens, it seems like they will be fighting for second place. By losing out on the next generation of PlayStations to Microsoft, Sony’s place at the top of the console market may have just come to an end.",
					link: "article/the-end-of-console-wars"
				}
			],

			filteredArticles: []
		};
	}
	componentDidMount(){
		this.setState({
			filteredArticles: [...this.state.articles]
		})
	}

	filterArticles(category){
		console.log(category.target.value);
		console.log(...this.state.articles);

		const matches = [];
		const list = this.state.articles.forEach(function(i) {
			console.log(i.category);
			if (i.category.includes(category.target.value)) {
				console.log("Matches!!");
				matches.push(i);
			} 
		})
		console.log(list);
		console.log(matches);
		
		this.setState({
			filteredArticles: [...matches]
		})
	}
	
	resetArticles(){
		this.setState({
			filteredArticles: [...this.state.articles]
		})
	}
	render(){
		
		const articles = this.state.filteredArticles.map((article, index) => (
			<h3 key={index}>
				<Article {...article} />
			</h3>
			));
	return(
		<div className="newsfeed">
			<h1>ARTICLES</h1>
			<ul>{articles}</ul>
			<button value="Nintendo" onClick={
				this.filterArticles.bind(this)
				}> Nintendo
			</button>
			<button value="" onClick={
				this.resetArticles.bind(this)
				}> Remove
			</button>
		</div>
		);
	}
}