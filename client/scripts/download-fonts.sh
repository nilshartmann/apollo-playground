#! /bin/bash

PUBLIC_DIR=../public
FONTS_DIR=$PUBLIC_DIR/fonts/

# fonts.css:https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i
# materialicons.css: https://fonts.googleapis.com/icon?family=Material+Icons

downloadFontsFromCSS() {
	CSS_FILE=$1

	for i in `cat $CSS_FILE | grep url | cut -d "(" -f 4 | cut -d ")" -f 1`; do

			echo Font: $i

		# Host abschneiden (https://fonts.gstatic.com/)
		TARGET=`echo $i|cut -b27-`

		TARGET_FILE=$FONTS_DIR$TARGET

		TARGET_DIR=`dirname $TARGET_FILE`

		echo TARGET_FILE: $TARGET_FILE
		echo TARGET_DIR: $TARGET_DIR

		mkdir -p $TARGET_DIR

		curl $i -o $TARGET_FILE
	done

	sed 's/https:\/\/fonts.gstatic.com/\/fonts/' $CSS_FILE >$PUBLIC_DIR/google-$CSS_FILE


	}

downloadFontsFromCSS fonts.css
downloadFontsFromCSS material-icons.css

