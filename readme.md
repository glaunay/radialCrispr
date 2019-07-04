![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Radial Representation

![example display](https://github.com/sophielem/radialCrispr/blob/master/docs/example_display.png)

## Usage
Pour utiliser ce composant, il est nécessaire de lui transmettre deux informations à l'aide des propriétés : **dic_sgrna** et **max_occ**.

#### dic_sgrna
Transmettre une chaîne de caractère en format *JSON* sous ce format :
```JSON
{
      "sequence": "GACGCACCAGATTTAGGTTCTGG",
      "occurences": [
          {
              "org": "Buchnera aphidicola (Cinara tujafilina) GCF_000217635.1",
              "all_ref": [
                  {
                      "ref": "NC_015662.1",
                      "coords": [
                          "+(320512,320534)"
                      ]
                  }
              ]
          },
          {
              "org": "Aliivibrio wodanis GCF_000953695.1",
              "all_ref": [
                  {
                      "ref": "NZ_LN554846.1",
                      "coords": [
                          "+(864792,864814)",
                          "+(865131,865153)",
                          "+(865471,865493)",
                          "+(865810,865832)"
                      ]
                  },
                  {
                      "ref": "test.1",
                      "coords": [
                          "+(864792,864814)",
                          "+(865131,865153)",
                          "+(865471,865493)",
                          "+(865810,865832)"
                      ]
                  }
              ]
          }
      ]
  }
```

#### max_occ
Transmettre le nombre d'occurence maximum pour la représentation graphique.

## Event
Un message est transmis lorsque l'utilisateur clique sur un noeud sur le *radar chart* sous le nom : **changeOrgRefSgrna**
