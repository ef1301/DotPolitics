import React from 'react';

const ResultCard = (props) => {
    let election = props.item;
    return (
        <div>
            {election.electionDay} {election.name}
        </div>
    );
};

const ResultCardPoll = (props) => {
    let out = props.item;
    return (
        <div>
            {out.name}
        </div>
    );
};

export {ResultCard,ResultCardPoll};
// export default ResultCard;