// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rEfCz2iwr7rKqS5mwAwHSJ
// Component: 0pEEgiS0nxHbIS
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantseBz5EHfWhcIiS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eBz5eHfWHCIiS/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_dirt.module.css"; // plasmic-import: rEfCz2iwr7rKqS5mwAwHSJ/projectcss
import sty from "./PlasmicProductRow.module.css"; // plasmic-import: 0pEEgiS0nxHbIS/css

export const PlasmicProductRow__VariantProps = new Array();

export const PlasmicProductRow__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductRow__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseBz5EHfWhcIiS()
  });
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__bhatf)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__qfDzf)}>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__s3Hp7
            )}
          >
            {"Boost Brand\nVisibility"}
          </h5>
        </div>
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__e3Rwn)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__lpLbf)}>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__cSBsD
            )}
          >
            {"Strengthen Industry Connections"}
          </h5>
        </div>
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column___6IF8)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__sXqJ5)}>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__smnOk
            )}
          >
            {"Enhance Brand \nImage"}
          </h5>
        </div>
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__g1OT)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__o1Mvh)}>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__gTlP8
            )}
          >
            {"Create Lasting Impressions"}
          </h5>
        </div>
      </p.Stack>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductRow__ArgProps,
          internalVariantPropNames: PlasmicProductRow__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProductRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductRow";
  } else {
    func.displayName = `PlasmicProductRow.${nodeName}`;
  }
  return func;
}

export const PlasmicProductRow = Object.assign(
  // Top-level PlasmicProductRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductRow
    internalVariantProps: PlasmicProductRow__VariantProps,
    internalArgProps: PlasmicProductRow__ArgProps
  }
);

export default PlasmicProductRow;
/* prettier-ignore-end */