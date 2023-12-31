import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  UnderConstruction,
} from "@core/components";
import UserMap from "./map-test/Map";
import MenuIcons from "./layouts/menu/MenuIcons";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";


const queryClient = new QueryClient({
  defaultOptions: {
    //queries and mutations
    queries: {
      staleTime: 10000,
      cacheTime: 60000,
      refetchOnMount: false,

      /**
       * This callback will fire any time the query successfully fetches new data or the cache is updated via `setQueryData`.
       */
      onSuccess: (data: unknown) => { },
      // onError?: (err: TError) => void;

      onSettled: (data: unknown | undefined) => { },
      /**
       * Whether errors should be thrown instead of setting the `error` property.
       * If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
       * If set to `false` and `suspense` is `false`, errors are returned as state.
       * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
       * Defaults to `false`.
       */
      useErrorBoundary: true,
      retry: 3,
      refetchOnWindowFocus: false,
    },
    // mutations: {}
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UserMap />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* TODO: Add User Dashboard */}

        {/* Matatus */}
        <Route path="/matatus" element={<UnderConstruction />}>
          <Route path=":matatuId" element={<UnderConstruction />} /> {/**Matatu Details */}
          <Route path=":matatuId/route" element={<UnderConstruction />} />
        </Route>

        {/* Routes */}
        <Route path="/routes" element={<UnderConstruction />}> {/**Route List */}
          <Route path=":routeId" element={<UnderConstruction />} /> {/**Single Route */}
          <Route path="plan" element={<UnderConstruction />} /> {/**Plan Trip */}
        </Route>

        {/* Analytics */}
        <Route path="/analytics" element={<UnderConstruction />}>
          <Route path="reports" element={<UnderConstruction />}> {/**Analytics Report */}
            <Route path="generate-reports" element={<UnderConstruction />} />
          </Route>
        </Route>

        {/* Preferences */}
        <Route path="/preferences" element={<UnderConstruction />}>
          <Route path="favorites" element={<UnderConstruction />} />
        </Route>

        {/* Notifications */}
        <Route path="/notifications" element={<UnderConstruction />}>
          <Route path="settings" element={<UnderConstruction />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<UnderConstruction />}>
          <Route path="matatus" element={<UnderConstruction />} />
          <Route path="routes" element={<UnderConstruction />} />
          <Route path="users" element={<UnderConstruction />} />
        </Route>

        {/* Favorites */}
        <Route path="/favorites" element={<UnderConstruction />}>
          <Route path="add/:userId" element={<UnderConstruction />} />
          <Route path="remove/:userId/:favoriteId" element={<UnderConstruction />} />
          <Route path=":userId" element={<UnderConstruction />} /> {/**Favorite By ID */}
        </Route>

        {/* Offline Caching */}
        <Route path="/cache" element={<UnderConstruction />} />
        <Route path="/cache/clear" element={<UnderConstruction />} />

        {/* Analytics */}
        <Route path="/analytics" element={<UnderConstruction />}>
          <Route path="track-event" element={<UnderConstruction />} />
          <Route path="get-analytics" element={<UnderConstruction />} />
        </Route>

        {/* Notifications */}
        <Route path="/notifications" element={<UnderConstruction />}>
          <Route path=":userId" element={<UnderConstruction />} />
          <Route path="mark-read/:notificationId" element={<UnderConstruction />} />
          <Route path="delete/:notificationId" element={<UnderConstruction />} />
        </Route>

        {/* User Profile */}
        <Route path="/user/:userId" element={<UnderConstruction />} />

        {/* Real-Time Tracking */}
        <Route path="/real-time-tracking" element={<UnderConstruction />}>
          <Route path="start/:userId/:matatuId" element={<UnderConstruction />} />
          <Route path="stop/:userId/:matatuId" element={<UnderConstruction />} />
        </Route>

        {/* Analytics Reports */}
        <Route path="/analytics/reports" element={<UnderConstruction />}>
          <Route path="generate" element={<UnderConstruction />} />
        </Route>

        <Route path="menu-icons" element={<MenuIcons />} />

        <Route path="*" element={<UnderConstruction />} /> {/**404 PAGE */}

      </Routes>
    </QueryClientProvider>
  );
}

export default App;

// TODO: Support anonymous auth and fully fledged account!