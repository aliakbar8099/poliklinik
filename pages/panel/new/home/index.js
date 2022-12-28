import SecondLayout from '/layout/second.layout';

function HomePanel() {
    return ( 
        <></>
     );
}

export default HomePanel;

HomePanel.getLayout = (page) => <SecondLayout>{page}</SecondLayout>