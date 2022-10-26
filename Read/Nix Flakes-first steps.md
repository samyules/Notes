---
alias: "Article: Nix Flakes-first steps"
author: Jakub Kozłowski
published: 2022-10-22
link: https://blog.kubukoz.com/flakes-first-steps/
read: 2022-10-26
summary: Supporting multiple architectures with nix flakes.
tags: [ nix, nix-flakes, flake-utils ]
---
# Article: Nix Flakes-first steps
- Jakub Kozłowski, 2022-10-22
-  https://blog.kubukoz.com/flakes-first-steps/
    > Supporting multiple architectures with nix flakes.

## The article in 3 Sentences
Jakub Kozłowzki does a very good job of explaining the basics of how nix flakes work, and how to write them. For me, the most improtant thing about this article is the simple explaination of how to support multiple computer architectures in flakes using flake-utils. He also covers the use of flakes to build repeatable shell environments.

>To sum up, in this article we covered:
> -   a brief introduction to Nix and Flakes
> -   defining a Nix shell in a flake
> -   some parts of the Nix language's syntax
> -   supporting multiple systems

## Notes
Referencing the currentSystem in a flake is "--impure". Will cause a failure, unless you include the `--impure` tag at the end of the command. 

flake-utils provides a `lib` output that doesn't require a system. It uses Nix's standard library to transform the list of systems we pass to it.

The `eachSystem` function  will take a list of systems we want to support, and make sure the entry in `devShells` ends up using the correct architecture for each system.

```nix
{
  inputs.nixpkgs.url = "github:nixos/nixpkgs";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachSystem [ "aarch64-darwin" "x86_64-linux" "aarch64-linux" ] (system:
      let
        pkgs = import nixpkgs {inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          pkgs = [ pkgs.cowsay ];
        };
      });
}
```
## Impressions

## How have my ideas have changed as a result of reading this?
