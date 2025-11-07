import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { SavePasswordScreen } from "./pages/savePassword";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#B942FF",
                tabBarInactiveTintColor: "#6B7280",
                tabBarShowLabel: false,

                tabBarStyle: {
                    backgroundColor: "#111827",
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 14,
                    left: 14,
                    right: 14,
                    borderRadius: 8,
                    height: 60,
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="PasswordsTab"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons name="lock-closed" size={size} color={color} />
                        }
                        return <Ionicons name="lock-closed-outline" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SavePassword"
                component={SavePasswordScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}