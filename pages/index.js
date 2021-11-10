import MeetupList from '../components/meetups/MeetupList';
const DUMMP_LIST = [
    {
        id: 'mu1',
        title: 'This should be',
        image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        address: 'aone o12, ',
        description: 'shitsl wl',
    },
    {
        id: 'mu2',
        title: 'This should be',
        image: 'https://thumbs.dreamstime.com/b/golf-ball-near-hole-26006969.jpg',
        address: 'get on',
        description: 'This will be on',
    },
];
const HomePage = (props) => {
    return <MeetupList meetups={props.meetupsList} />;
};
export async function getStaticProps() {
    return { props: { meetupsList: DUMMP_LIST } };
}
export default HomePage;
