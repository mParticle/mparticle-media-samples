import SwiftUI

struct ContentView : View {
    @State private var selection = 0
    
    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: MPBrightCovePlayer().navigationBarTitle(Text("Brightcove"))) {
                    PlayerRow(playerName: "Brightcove")
                }
                NavigationLink(destination: MPJWPlayer().navigationBarTitle(Text("JWPlayer"))) {
                    PlayerRow(playerName: "JWPlayer")
                }
            }
                .navigationBarTitle(Text("Media Players"))
        }
    }
}

#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
