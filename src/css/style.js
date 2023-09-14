const styles = {
    sidebarControlButton: {
        borderColor: "#2C2C2C"
    },
    mainView : {
        margin: 0,
        flex: 1,
        padding: 0,
        display: 'flex',
        minWidth: '100%',
        justifyContent: 'space-between'
    },
    sidebar : {
        borderWidth: 1,
        borderTopRightRadius: 30,
        borderColor: '#C7C7C7',
        borderBottomRightRadius: 30,
        top: 0,
        left: -3,
        height: '100vh',
        width: '30%',
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
    },
    sidebarMenu: {
        marginTop: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dashboardRoute: {
        padding: 0,
        display: 'inline',
        overflow: 'auto',
    },
    dashboardLeftSection: {
        display: 'block',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },
    dashboardPageTitle: {
        display: 'block',
        margin: '0px',
    },
    displayScreenLayout: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        margin: '0',
        background: '#F9FAF5',
        paddingLeft: '35px',
        paddingTop: '40px',
    },
    mainHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionOne: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        margin: '0',
        marginTop: '20px',
        width: '100%',
    },
    sectionOneDetails: {
        display: 'block',
        justifyContent: 'space-between',
        margin: '0',
        padding: '0',
        width: '30%',
    },
    sectionTwo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        marginBottom: '40px',
    },
    detailSection: {
        background: '#fff',
        display: 'block',
        width: '20%',
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '10px',
        alignItems: 'center',
        paddingTop: '20px',
        minHeight: '100vh'
    },
    searchSection: {
        display: 'inline-flex',
        margin: '0',
        right: '0px',
    },
    detailSectionHeader: {
        padding: '20px',
        display: 'flex',
        borderBottom: '1px solid #D9D9D9'
    },
    detailSectionBottom: {
        padding: '20px',
        display: 'block',
        justifyContent: 'space-between',
    },
    propIcon: {
        background: 'grey',
        borderRadius: '10px',
        padding: '15px',
        margin: "0"
    },
    trackProgress: {
        position: 'relative',
        display: 'inline-block',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
    },
    navMenu: {
        display: 'flex',
        margin: '0',
    },
    navOption: {
        display: 'flex',
        paddingBottom: '3px',
        marginRight: '25px'
    },
    navOptionActive: {
        display: 'flex',
        borderBottom: '2px solid grey',
        paddingBottom: '3px',
        marginRight: '25px',
        color: 'none',
        paddingRight: '5px',
        paddingLeft: '5px'
    },
    navOptionButton: {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
    },
    selectorSection: {
        display: 'flex',
        width: '100%',
        margin: 0,
        marginTop: '15px',
    },
    stackSelector: {
        display: 'flex',
        width: '20%'
    },
    circularProgressBar: {
        rotation: 0,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Text size
        textSize: '14px',
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
        // Colors
        pathColor: `rgba(44, 44, 44, ${66 / 100})`,
        textAlign: 'center',
        textColor: '#ABABAB',
        trailColor: '#d6d6d6',
        backgroundColor: '#ABABAB',
    },
    signinButton: {
        display: 'flex',
        padding: "10px",
        minWidth: '50%',
        height: '70px',
        borderRadius: '30px',
        background: '#D5E4FA',
        marginTop: '50px',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center'
    },
    signupButton: {
        display: 'flex',
        textAlign: 'center',
        padding: "10px",
        minWidth: '50%',
        height: '70px',
        borderRadius: '30px',
        background: '#2C2C2C',
        marginTop: '30px',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    signInButtonText: {
        margin: '0',
        marginLeft: '-70px',
        padding: '0',
        fontSize: '22px',
        fontWeight: '400'
    },
    signUpButtonText: {
        margin: '0',
        marginLeft: '-70px',
        padding: '0',
        fontSize: '22px',
        color: '#fff',
        fontWeight: '400'
    },
    signInButtonIcon: {
        margin: '0',
        padding: '0',
        fontSize: '20px',
        width: '35px',
        height: '35px'
    },
    milestoneDueBottomContainer: {
        display: 'flex',
        padding: '30px',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    milestoneDueBottomLightText: {
        fontSize: '10px',
        fontWeight: '400'
    },
    milestoneDueBottomBoldText: {
        fontSize: '24px',
        fontWeight: '700'
    },
    skillViewSelector: {
        borderRadius: '30px'
    }
}

export default styles;