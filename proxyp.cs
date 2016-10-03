interface IOyna
{
    void OyunOyna();
}

//Real Object 
public class Oyun : IOyna
{
    public void OyunOyna()
    {
        Console.WriteLine("Car has been driven!");
    }
}

//Proxy Object
public class VekilOyun : IOyna
{
    private Oyuncu oyuncu;
    private IOyna GercekOyun;

    public VekilOyun(Oyuncu oyuncu)
    {
        this.oyuncu = oyuncu;
        this.GercekOyun = new Oyun();
    }

    public void OyunOyna()
    {
        if (oyuncu.yas <= 16)
            Console.WriteLine("Yasın küçük.");
        else
            this.GercekOyun.OyunOyna();
     }
}

public class Oyuncu
{
    private int Yas { get; set; }

    public Oyuncu(int yas)
    {
        this.Yas = yas;
    }
}

private void btnProxy_Click(object sender, EventArgs e)
{
    IOyun oyun = new VekilOyun(new Oyuncu(16));
    oyun.OyunOyna();

 
}
