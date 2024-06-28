import React from 'react';
import { SafeAreaView } from 'react-native';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions.
import { cartoonify } from "@cloudinary/url-gen/actions/effect";

export default function FilteredImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dttc4c0s5'
        }
    });

    // Use the image with public ID, 'front_face'.
    const myImage = cld.image('5020913e-18b8-4aed-914a-be5c62d7c528');

    // Apply the transformation.
    myImage
      .effect(cartoonify());  

    // Render the transformed image in a React Native component.
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <AdvancedImage cldImg={myImage} style={{ width: 150, height: 200, alignSelf: 'center'}} />
      </SafeAreaView>
    )
};