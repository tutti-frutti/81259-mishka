"use strict";

module.exports = function(grunt) {
//  grunt.loadNpmTasks("grunt-browser-sync");
//  grunt.loadNpmTasks("grunt-contrib-watch");
//  grunt.loadNpmTasks("grunt-postcss");
//  grunt.loadNpmTasks("grunt-sass");
//  grunt.loadNpmTasks("grunt-svgstore");
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]}),
            require("css-mqpacker")({
            sort: true
            })
          ]
        },
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: false
        }
      }
    },
    svgstore: {
      options: {
        svg: {
          style: "display: none;"
        }
      },
      symbols: {
        files: {
          "img/symbols.svg": ["img/icons/*.svg"]
        }
      }
    },
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg}"]
        }]
      }
    },
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff, woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      }
    }
//    svgmin: {
//      symbols: {
//        files: [{
//          expand: true,
//          src: ["img/icons/*.svg"]
//        }]
//      }
//    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]),
  grunt.registerTask("symbols", ["svgstore"]);

//  grunt.registerTask("biuld", {
//    "saas",
//    "postcss",
//    "csso",
//    "imagemin"
//  })
};
