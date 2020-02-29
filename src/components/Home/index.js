import React, { Component } from 'react';
import data from '../../data.json';
import NavBar from '../Navbar';
import Card from '../Card';

class Home extends Component {
    state ={
        data,
        score: 0,
        topScore: 0
    }
    componentDidMount(){
        this.setState({
            data: this.shuffleData(this.state.data)
        })
    }
    handleImageClick = id =>{
        let guessedCorrectly = false;
        const updatedData = this.state.data.map(item => {
            const newItem = {...item};
            if(newItem.id === id){
                if(!newItem.clicked){
                    newItem.clicked =true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        })
        guessedCorrectly ? this.correctFun(updatedData) : this.incorrectFun(updatedData)
    }
    correctFun = (newData) => {
        const newScore = this.state.score + 1;
        const newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            score: newScore,
            topScore: newTopScore,
            data: this.shuffleData(newData)
        })
    }
    incorrectFun = (newData) => {
        this.setState({
            data: this.resetData(newData),
            score: 0
        })
    }
    resetData = newData => {
        const resetData = newData.map(item => ({...item, clicked: false}))
        return this.shuffleData(resetData);
    }
    shuffleData = data => {
        let i = data.length-1;
        while(i>0){
            // swapping functionality
            const  j = Math.floor(Math.random() * (i+1));
            const temp = data[i];
            data[i] = data[j]
            data[j] = temp;
            i--;
        }
        return data;
    }
    render() {
        return (
            <div>
                <NavBar score={this.state.score} topScore={this.state.topScore}/>
                {this.state.data.map(item => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        handleClick={this.handleImageClick}
                        image={item.image}
                    />
                ))}
                
            </div>
        );
    }
}

export default Home;