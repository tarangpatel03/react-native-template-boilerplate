import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './navigation.types';
import { HomeNavigator } from '@/features/home';
import { AppText, TabIcon } from '@/shared/ui';
import { appAssets } from '@/assets';
import { ImageSourcePropType } from 'react-native';
import { normalize } from '@/shared/lib';

const Tab = createBottomTabNavigator<BottomTabParamList>();

type TabBarIconProps = {
  icon: ImageSourcePropType | undefined;
  filledIcon: ImageSourcePropType | undefined;
  props: any;
};

const showTabIcon = ({ icon, filledIcon, props }: TabBarIconProps) => {
  return <TabIcon icon={props.focused ? icon : filledIcon} />;
};

const showTabLabel = ({ title }: { title: string }) => {
  return <AppText style={{ fontSize: 12 }}>{title}</AppText>;
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { paddingTop: normalize(10) },
      }}
    >
      <Tab.Screen
        name={'HomeStack'}
        component={HomeNavigator}
        options={{
          tabBarLabel: (props) => showTabLabel({ title: 'Home' }),
          tabBarIcon: (props) =>
            showTabIcon({
              filledIcon: appAssets.icons.ic_home,
              icon: appAssets.icons.ic_home_filled,
              props,
            }),
        }}
      />
    </Tab.Navigator>
  );
};
