import SwiftUI

struct PlayerRow : View {
    var playerName: String
    
    var body: some View {
        HStack {
            Image(playerName)
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(minWidth: nil, idealWidth: nil, maxWidth: nil, minHeight: 70, idealHeight: 70, maxHeight: 70, alignment: .leading)
            Text(playerName)
        }
    }
}

#if DEBUG
struct PlayerRow_Previews : PreviewProvider {
    static var previews: some View {
        Group {
            PlayerRow(playerName: "BrightCove")
            PlayerRow(playerName: "JSPlayer")
            }
            .previewLayout(.fixed(width: 300, height: 70))
    }
}
#endif
