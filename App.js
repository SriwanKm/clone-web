import React, {useState, useEffect} from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const image = {uri: "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/mainImage.jpg"};
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function App() {
    const [dimensions, setDimensions] = useState({window, screen});
    const onChange = ({window, screen}) => {
        setDimensions({window, screen});
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    const isPortrait = () => {
        return dimensions.screen.height > dimensions.screen.width
    }

    const pressed = () => {
        console.log("I'm pressed")
    }

    const [navMenu, setNav] = useState([
        {key: 'Home', id: 1, isPressed: false},
        {key: 'About', id: 2, isPressed: false},
        {key: 'Portfolio', id: 3, isPressed: false},
        {key: 'Services', id: 4, isPressed: false},
        {key: 'Contact', id: 5, isPressed: false},
    ])

    return (
        <ScrollView>
            <LinearGradient colors={['#a63702', '#eb8600']} style={styles.navContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flex: 1}}
                    data={[
                        {key: 'Home'},
                        {key: 'About'},
                        {key: 'Portfolio'},
                        {key: 'Services'},
                        {key: 'Contact'},
                    ]}
                    renderItem={({item}) => (
                        <View style={styles.navItem}>
                            <TouchableHighlight underlayColor="#000000" onPress={pressed}>
                                <Text style={styles.navText}>{item.key}</Text>
                            </TouchableHighlight>
                            <View style={styles.dashed}></View>
                        </View>
                    )}
                />
            </LinearGradient>
            <View style={styles.line}/>
            <LinearGradient colors={['#eb8600', '#4f2108', '#26070a']} style={styles.sectionCon}>

                <ImageBackground source={image} style={isPortrait() ? styles.imgP : styles.img}>
                    <Text style={styles.header}>Barren Savannah</Text>
                    <Text style={styles.subHeader}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                </ImageBackground>

                <LinearGradient
                    colors={isPortrait() ? ['#fed5ac', '#eb8600'] : ['#fed5ac', '#ffffff', '#ffffff', '#ffffff']}
                    style={isPortrait() ? styles.sectionP : styles.section}>
                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>The Title of an Article</Text>
                        <Text style={styles.p}>
                            You may use this template on any site, anywhere, for free just please leave the link back to
                            me
                            in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
                            <TouchableOpacity>
                                <Text style={styles.link}>This is what a link looks like.</Text>
                            </TouchableOpacity>
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>
                        <View style={isPortrait() ? styles.dottedBoxP : styles.dottedBox}>
                            <Text style={styles.p}>
                                This is a block quote, use it to include quotes from yourself or others. All you have to
                                do to include this element is wrap some text around blockquote tags
                            </Text>
                        </View>
                    </View>

                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>Titles are H1 Tags</Text>
                        <Text style={styles.p}>
                            Since the titles are H1 tags, try to include your keywords in them as search engines will
                            look
                            at them as being important content.
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>

                        <Text style={styles.p}>
                            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue
                            tortor,
                            tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus
                            quis,
                            laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad
                            litora
                            torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis,
                            pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                        </Text>
                    </View>

                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>Yet Another One!</Text>
                        <Text style={styles.p}>
                            You may use this template on any site, anywhere, for free just please leave the link back to
                            me
                            in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>

                        <Text style={styles.p}>
                            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue
                            tortor,
                            tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus
                            quis,
                            laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad
                            litora
                            torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis,
                            pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                        </Text>

                    </View>
                </LinearGradient>
            </LinearGradient>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 25,

    },
    navText: {
        flex: 1,
        color: '#923a1f',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 10,

    },
    navItem: {
        marginHorizontal: 30,
    },
    dashed: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#923a1f',
        marginHorizontal: 10,
    },
    img: {
        borderColor: '#000000',
        borderWidth: 9,
        borderTopWidth: 0,
        marginHorizontal: 20,
        marginBottom: 20,
        paddingBottom: 360,
    },
    imgP: {
        borderColor: '#000000',
        borderWidth: 9,
        borderTopWidth: 0,
        marginBottom: 20,
        paddingBottom: 360,
    },
    header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 26,
        marginHorizontal: 20,
        paddingTop: 12,
    },
    subHeader: {
        color: '#000000',
        fontSize: 18,
        marginHorizontal: 20,
        paddingBottom: 12,
    },
    line: {
        borderTopColor: '#000000',
        borderTopWidth: 12,
    },
    sectionCon: {},
    link: {
        color: '#ca740d',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dottedBox: {
        borderColor: '#c97003',
        borderWidth: 1,
        margin: 20,
        padding: 15,
        borderStyle: 'dashed',
        width: '70%',
    },
    dottedBoxP: {
        borderColor: '#000000',
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 20,
        padding: 15,
        borderStyle: 'dashed',
    },
    section: {
        borderColor: '#000000',
        borderWidth: 9,
        margin: 20,
        paddingHorizontal: 10,
    },
    sectionP: {
        paddingHorizontal: 10,
    },
    subSection: {
        padding: 12,
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 8,
    },
    p: {
        fontSize: 16,
        marginVertical: 10,
        lineHeight: 25,
    },
});
