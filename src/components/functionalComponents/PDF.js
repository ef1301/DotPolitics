import React, {useState} from 'react';
import { Page, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { SocialIcon } from 'react-social-icons';

const API_KEY = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A"

const styles = StyleSheet.create({
    name:{
        fontSize:35,
        margin: 5
    },party:{
        fontSize: 25
    }, subtext:{
        fontSize: 18
    },seperate:{
        margin:20
    }, socialmedia:{
        fontSize:12
    }
});



const PDF = (props) => {
    const [candidates, setCandidates] = useState([]);
    const query = props.match.params.query;
    React.useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${query}`)
        .then(res => res.json())
        .then(
            (result) => {
                debugger
                setCandidates(result.officials.map(official=>{
                    // let image =  official.photoUrl ? <Image src={official.photoUrl} alt={`${official.name} photo`}></Image> : <Image src={pfp} alt={`${official.name} photo`} aria-label="No Representative Photo"></Image>
                    let phones = official.phones ? official.phones.map((number,index) => <p key={`${official.name} phone ${index}`}>{number}</p>) : <></>
                    let links = official.urls ? official.urls.map((link, index) => <p><a key={index} href={link}>{link}</a></p>) : <></>
                    let social_media =  official.channels ? official.channels.map((channel, index) => {
                            if(channel.type === "Twitter") {
                                return( <Text style={styles.socialmedia}>
                                    {"https://twitter.com/" + channel.id}
                                </Text>);
                            } else if (channel.type === "Facebook") {
                                return( <Text style={styles.socialmedia}>
                                    {"https://facebook.com/" + channel.id}
                                </Text>);
                            } else return <></>;
                        }) :
                        <></>
                    return <>
                        <Text style={styles.party}>
                            {official.party}
                        </Text>
                        <Text style={styles.name}>
                            {official.name}
                        </Text>
                        <Text style={styles.subtext}>
                            Phone: {phones}
                        </Text>
                        <Text style={styles.subtext}>
                            Links: {links}
                        </Text>
                        {social_media}
                        <Text style={styles.seperate}/>
                    </>
                }))
            },

            (er) => {
                console.log(er);
            });
    }, [query]);
    return <Document>
        <Page style={styles.body}>
            {candidates}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
        )} fixed />
        </Page>
    </Document>
}




export default PDF;